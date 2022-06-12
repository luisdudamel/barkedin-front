import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDog } from "../../interfaces/Dogs";

const initialState: IDog[] = [];

const dogSlice = createSlice({
  name: "dogs",
  initialState: initialState,
  reducers: {
    loadFavDogs: (favDogs, action: PayloadAction<IDog[]>) => [
      ...action.payload,
    ],
    deleteFavDog: (favDogs, action: PayloadAction<IDog["id"]>) => [
      ...favDogs.filter((dog) => dog.id !== action.payload),
    ],
    createFavDog: (favDogs, action: PayloadAction<IDog>) => [
      ...favDogs,
      action.payload,
    ],
    loadMoreFavDogs: (favDogs, action: PayloadAction<IDog[]>) => [
      ...favDogs,
      ...action.payload,
    ],
  },
});

export const {
  loadFavDogs: loadFavDogsActionCreator,
  deleteFavDog: deleteFavDogActionCreator,
  createFavDog: createFavDogActionCreator,
  loadMoreFavDogs: loadMoreFavDogsActionCreator,
} = dogSlice.actions;

export default dogSlice.reducer;
