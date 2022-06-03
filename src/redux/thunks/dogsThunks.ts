import axios from "axios";
import { AppDispatch } from "../store";

export const getFavDogs = async (token: string) => {
  try {
    const { data: favDogs } = await axios.get(
      `${process.env.REACT_APP_API_URL_DEV}dogs/favdogs`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          username: "luis1",
        },
      }
    );
    console.log(favDogs);
  } catch {}
};
