import axios from "axios";
import { loadFavDogsActionCreator } from "../feature/dogsSlice";
import { AppDispatch } from "../store";

export const getFavDogsThunk =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { favdogs: favDogs },
        status,
      } = await axios.get(`${process.env.REACT_APP_API_URL_DEV}dogs/favdogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          username: "luis1",
        },
      });

      dispatch(loadFavDogsActionCreator(favDogs));
    } catch {}
  };
