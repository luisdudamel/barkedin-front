import axios from "axios";
import {
  deleteFavDogActionCreator,
  loadFavDogsActionCreator,
} from "../feature/dogsSlice";
import { AppDispatch } from "../store";
import { IDog } from "../../interfaces/Dogs";
import { UserCredential } from "../../interfaces/UserCredential";
import { loadingActionCreator } from "../feature/uiSlice";

export const getFavDogsThunk =
  (username: UserCredential["username"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");
    dispatch(loadingActionCreator({ loading: true }));
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
        dispatch(loadingActionCreator({ loading: false }));
        return favDogs;
      }
    } catch {}
    dispatch(loadingActionCreator({ loading: false }));
  };

export const deleteFavDogThunk =
  (id: IDog["id"]) => async (dispatch: AppDispatch) => {
    const currentToken = localStorage.getItem("token");
    dispatch(loadingActionCreator({ loading: true }));
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
    dispatch(loadingActionCreator({ loading: false }));
  };

export const createFavDogThunk =
  (newDog: any) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));
    const currentToken = localStorage.getItem("token");
    await axios.post(
      `${process.env.REACT_APP_API_URL_DEV}dogs/create`,
      newDog,
      {
        headers: {
          Authorization: `Bearer ${currentToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(loadingActionCreator({ loading: false }));
  };

export const editFavDogThunk =
  (editedFavDog: any, id: string | undefined) =>
  async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator({ loading: true }));
    const currentToken = localStorage.getItem("token");
    await axios.put(
      `${process.env.REACT_APP_API_URL_DEV}dogs/edit/:${id}`,
      editedFavDog,
      {
        headers: {
          Authorization: `Bearer ${currentToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    dispatch(loadingActionCreator({ loading: false }));
  };
