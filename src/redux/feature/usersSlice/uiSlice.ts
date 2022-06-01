import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Loading } from "../../../interfaces/uiFeedback";

const initialState: Loading = {
  loading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui, action: PayloadAction<Loading>) => ({ ...action.payload }),
  },
});

export const { loading: loadingActionCreator } = uiSlice.actions;
export default uiSlice.reducer;
