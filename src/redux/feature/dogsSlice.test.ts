import { IDog } from "../../interfaces/Dogs";
import {
  mockFavDogs,
  mockFavDogsFirstDeleted,
  mockFavDogsOneAdded,
} from "../../mocks/dogs";
import dogsReducer, {
  createFavDogActionCreator,
  deleteFavDogActionCreator,
  loadFavDogsActionCreator,
} from "./dogsSlice";

describe("Given a loadFavDogs slice", () => {
  describe("When its invoked with a list of dogs", () => {
    test("Then it should return the same list of dogs", () => {
      const expectedLoadedDogs: IDog[] = mockFavDogs;
      const dogsToLoad: IDog[] = mockFavDogs;

      const loadAction = loadFavDogsActionCreator(dogsToLoad);
      const loadedFavDogs = dogsReducer(dogsToLoad, loadAction);

      expect(loadedFavDogs).toEqual(expectedLoadedDogs);
    });
  });
});

describe("Given a deleteFavDog slice", () => {
  describe("When its invoked with a list of dogs and an id", () => {
    test("Then it should return the same list of dogs without the dog associated to the id provided", () => {
      const actualDogs: IDog[] = mockFavDogs;
      const idToDelete = "213123123";
      const expectedDogsOneDeleted: IDog[] = mockFavDogsFirstDeleted;

      const deleteAction = deleteFavDogActionCreator(idToDelete);
      const actualDogsOneDeleted = dogsReducer(actualDogs, deleteAction);

      expect(expectedDogsOneDeleted).toEqual(actualDogsOneDeleted);
    });
  });
});

describe("Given a createFavDog slice", () => {
  describe("When its invoked with a list of dogs and a new dog", () => {
    test("Then it should return the same list of dogs with the new dog added", () => {
      const actualDogs: IDog[] = mockFavDogs;
      const favDogToAdd: IDog = {
        name: "Hachiko",
        age: 3,
        breed: "Akita",
        id: "123123",
        personality: "beach",
        picture: "Hachiko.jpg",
        title: "Beach Lover",
        toy: "Ball",
        weight: "23kg",
        bio: "Good dog",
      };
      const expectedDogsOneAdded: IDog[] = mockFavDogsOneAdded;

      const createAction = createFavDogActionCreator(favDogToAdd);
      const actualDogsOneAdded = dogsReducer(actualDogs, createAction);

      expect(expectedDogsOneAdded).toEqual(actualDogsOneAdded);
    });
  });
});
