import { GetActiveBody, getbody } from "@/src/redux/modal/selectors";
import { setParts } from "@/src/redux/modal/slice";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";

function ColorPicker() {
  const [color] = useState("#aabbcc");
  const value = useSelector(GetActiveBody);
  const body = useSelector(getbody);
  const dispatch = useDispatch();

  function handlePick(e: any) {
    try {
      let data: any = {};
      Object.assign(data, body);
      data[value] = e;
      dispatch(setParts(data));
    } catch (e: any) {
      alert(e.message);
    }
  }

  return (
    <div>
      {value ? (
        <div className="absolute m-8 right-0 z-50">
          <HexColorPicker
            className="picker"
            color={body[value]}
            onChange={handlePick}
          />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
