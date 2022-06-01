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
      name: user.name,
      username: user.username,
      id: user.id,
      logged: localStorage.getItem("token") ? true : false,
    }),
  },
});

export default userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
