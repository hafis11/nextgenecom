import { createSlice } from "@reduxjs/toolkit";
import { ModalState } from "./enum";

const initialState: ModalState = {
  activeBody: "",
  parts: null,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setParts(state, action) {
      state.parts = action.payload;
    },
    setActive(state, action) {
      state.activeBody = action.payload;
    },
  },
});

export const { setActive, setParts } = ModalSlice.actions;

export default ModalSlice.reducer;
