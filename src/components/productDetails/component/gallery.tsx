import { setParts } from "@/src/redux/modal/slice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ColorPicker from "./colorPicker";
import ModalView from "./modalView";

function Gallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setParts(BODY));
  }, []);
  //
  return (
    <div className="bg-black rounded-3xl relative overflow-hidden h-full">
      <ColorPicker />
      <ModalView />
    </div>
  );
}

export default Gallery;

const BODY = {
  laces: "#fff",
  mesh: "#fff",
  caps: "#fff",
  inner: "#fff",
  sole: "#fff",
  stripes: "#fff",
  band: "#fff",
  patch: "#fff",
};
