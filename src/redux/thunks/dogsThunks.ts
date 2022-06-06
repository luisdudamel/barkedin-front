import axios from "axios";
import {
  deleteFavDogActionCreator,
  loadFavDogsActionCreator,
} from "../feature/dogsSlice";
import { AppDispatch } from "../store";
import { IDog } from "../../interfaces/Dogs";
import { UserCredential } from "../../interfaces/UserCredential";

export const getFavDogsThunk =
  (username: UserCredential["username"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");

    try {
      const {
        data: { favdogs: favDogs },
        status,
      } = await axios.get(`${process.env.REACT_APP_API_URL_DEV}dogs/favdogs`, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
        data: {
          username: username,
        },
      });
      if (status === 200) {
        dispatch(loadFavDogsActionCreator(favDogs));
      }
    } catch {}
  };

export const deleteFavDogThunk =
  (id: IDog["id"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");

    try {
      const { status } = await axios.delete(
        `${process.env.REACT_APP_API_URL_DEV}dogs/${id}`,
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        }
      );

      if (status === 200) {
        dispatch(deleteFavDogActionCreator(id));
      }
    } catch {}
  };
