import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  LoginCredentials,
  UserCredential,
  UserState,
} from "../../interfaces/UserCredential";
import { loginUserActionCreator } from "../feature/usersSlice/usersSlice";

interface Token {
  token: string;
}

export const registerUserThunk = (formData: UserCredential) => async () => {
  try {
    await axios.post<UserCredential>(
      `${process.env.REACT_APP_API_URL_DEV}users/register`,
      formData
    );
  } catch {}
};

export const loginUserThunk =
  (formData: LoginCredentials) => async (dispatch: Dispatch) => {
    try {
      const route = `${process.env.REACT_APP_API_URL_DEV}users/login`;
      const {
        data: { token },
      } = await axios.post<Token>(route, formData);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode<UserState>(token);

      dispatch(loginUserActionCreator(userInfo));
    } catch (error) {}
  };
