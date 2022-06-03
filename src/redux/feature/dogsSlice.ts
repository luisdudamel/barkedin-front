import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dog } from "../../interfaces/Dogs";

const initialState: Dog[] = [];

const dogSlice = createSlice({
  name: "dogs",
  initialState: initialState,
  reducers: {
    loadFavDogs: (favDogs, action: PayloadAction<Dog[]>) => [...action.payload],
  },
});

export const { loadFavDogs: loadFavDogsActionCreator } = dogSlice.actions;

export default dogSlice.reducer;
