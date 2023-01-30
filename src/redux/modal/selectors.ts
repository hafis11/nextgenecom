import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../store";

// export const mashColor = (state: any) => state.auth.authState;

export const GetActiveBody = createSelector(
  (state: AppState) => state.modal,
  (resp: any) => resp?.activeBody
);

export const getbody = createSelector(
  (state: AppState) => state.modal,
  (resp: any) => resp?.parts
);
