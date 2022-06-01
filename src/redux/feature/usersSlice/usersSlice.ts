import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../interfaces/UserCredential";

const initialState: UserState = {
  name: "",
  username: "",
  logged: false,
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (user, action: PayloadAction<UserState>) => ({
      ...action.payload,
      logged: localStorage.getItem("token") ? true : false,
    }),
  },
});

export const userSliceReducer = userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
