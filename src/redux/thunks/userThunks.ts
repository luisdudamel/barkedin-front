import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import UserCredential from "../../interfaces/UserCredential";

export const registerUserThunk =
  (formData: UserCredential) => async (dispatch: Dispatch) => {
    try {
      await axios.post<UserCredential>(
        `${process.env.REACT_APP_API_URL_DEV}users/register`,
        formData
      );
    } catch {}
  };
