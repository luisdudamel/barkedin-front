import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  LoginCredentials,
  UserCredential,
  UserState,
  Token,
} from "../../interfaces/UserCredential";
import { loadingActionCreator } from "../feature/uiSlice";
import {
  loginUserActionCreator,
  registerUserActionCreator,
} from "../feature/usersSlice";
import { AppDispatch } from "../store";

export const registerUserThunk =
  (formData: UserCredential) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL_DEV}users/register`,
        formData
      );

      dispatch(registerUserActionCreator());
      dispatch(loadingActionCreator({ loading: false }));
      return "User created succesfuly";
    } catch (error) {
      dispatch(loadingActionCreator({ loading: false }));
      return "Error creating new user";
    }
  };

export const loginUserThunk =
  (formData: LoginCredentials) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));

    try {
      const route = `${process.env.REACT_APP_API_URL_DEV}users/login`;

      const {
        data: { token },
      } = await axios.post<Token>(route, formData);
      localStorage.setItem("token", token);
      const userInfo = jwtDecode<UserState>(token);

      dispatch(loadingActionCreator({ loading: false }));
      dispatch(loginUserActionCreator(userInfo));
    } catch (error) {
      dispatch(loadingActionCreator({ loading: false }));
      return "Username or password is wrong";
    }
    dispatch(loadingActionCreator({ loading: false }));
  };
