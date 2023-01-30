import { GetActiveBody, getbody } from "@/src/redux/modal/selectors";
import { setActive, setParts } from "@/src/redux/modal/slice";
import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useDispatch, useSelector } from "react-redux";
import useClickOutside from "../../../utils/onClickOutSide";

function ColorPicker() {
  const popover = useRef();
  const [color] = useState("#aabbcc");
  const value = useSelector(GetActiveBody);
  const body = useSelector(getbody);
  const dispatch = useDispatch();
  const close = useCallback(() => dispatch(setActive("")), []);
  useClickOutside(popover, close);

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
        <div ref={popover as any} className="absolute m-8 right-0 z-50">
          <HexColorPicker color={color} onChange={handlePick} />
        </div>
      ) : null}
    </div>
  );
}

export default ColorPicker;
