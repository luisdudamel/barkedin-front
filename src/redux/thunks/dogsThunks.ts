import axios from "axios";
import { loadFavDogsActionCreator } from "../feature/dogsSlice";
import { AppDispatch } from "../store";

export const getFavDogsThunk =
  (username: string) => async (dispatch: AppDispatch) => {
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
