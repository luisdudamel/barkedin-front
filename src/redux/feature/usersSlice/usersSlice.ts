import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  username: string;
  logged: boolean;
}

const initialState: UserState = { name: "", username: "", logged: false };

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
