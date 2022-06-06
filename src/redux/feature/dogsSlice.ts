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
  },
});

export const { loadFavDogs: loadFavDogsActionCreator } = dogSlice.actions;

export default dogSlice.reducer;
