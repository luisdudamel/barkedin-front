import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  LoginCredentials,
  UserCredential,
} from "../../interfaces/UserCredential";

export const registerUserThunk =
  (formData: UserCredential) => async (dispatch: Dispatch) => {
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
      } = await axios.post(route, formData);

      localStorage.setItem("token", token);

      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
    } catch (error) {}
  };
