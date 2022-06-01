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
      name: user.name,
      username: user.username,
      id: user.id,
      logged: true,
    }),
  },
});

export default userSlice.reducer;

export const { loginUser: loginUserActionCreator } = userSlice.actions;
