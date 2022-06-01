import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  LoginCredentials,
  UserCredential,
  UserState,
} from "../../interfaces/UserCredential";
import { loadingActionCreator } from "../feature/usersSlice/uiSlice";
import {
  loginUserActionCreator,
  registerUserActionCreator,
} from "../feature/usersSlice/usersSlice";

interface Token {
  token: string;
}

export const registerUserThunk =
  (formData: UserCredential) => async (dispatch: Dispatch) => {
    await axios.post(
      `${process.env.REACT_APP_API_URL_DEV}users/register`,
      formData
    );
    dispatch(registerUserActionCreator());
  };

export const loginUserThunk =
  (formData: LoginCredentials) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator({ loading: true }));
      const route = `${process.env.REACT_APP_API_URL_DEV}users/login`;
      const {
        data: { token },
      } = await axios.post<Token>(route, formData);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode<UserState>(token);

      dispatch(loginUserActionCreator(userInfo));
    } catch (error) {}
    dispatch(loadingActionCreator({ loading: false }));
  };
