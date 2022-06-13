import { IDog } from "../../interfaces/Dogs";
import {
  mockAllDogs,
  mockAllDogsTwoAdded,
  mockAllFavDogs,
  mockAllFavDogsTwoAdded,
  mockFavDogs,
  mockFavDogsFirstDeleted,
  mockFavDogsOneAdded,
} from "../../mocks/dogs";
import dogsReducer, {
  createFavDogActionCreator,
  deleteFavDogActionCreator,
  loadAllDogsActionCreator,
  loadFavDogsActionCreator,
  loadMoreAllDogsActionCreator,
  loadMoreFavDogsActionCreator,
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
        owner: "123",
      };
      const expectedDogsOneAdded: IDog[] = mockFavDogsOneAdded;

      const createAction = createFavDogActionCreator(favDogToAdd);
      const actualDogsOneAdded = dogsReducer(actualDogs, createAction);

      expect(expectedDogsOneAdded).toEqual(actualDogsOneAdded);
    });
  });
});

describe("Given a loadAllDogs slice", () => {
  describe("When its invoked with a list of dogs", () => {
    test("Then it should return the same list of dogs", () => {
      const expectedLoadedDogs: IDog[] = mockFavDogs;
      const dogsToLoad: IDog[] = mockFavDogs;

      const loadAction = loadAllDogsActionCreator(dogsToLoad);
      const loadedAllDogs = dogsReducer(dogsToLoad, loadAction);

      expect(loadedAllDogs).toEqual(expectedLoadedDogs);
    });
  });
});

describe("Given a loadMoreAllDogs slice", () => {
  describe("When its invoked with two lists of dogs", () => {
    test("Then it should return the same a list with both previous lists together", () => {
      const actualDogs: IDog[] = mockAllDogs;
      const dogsToAdd: IDog[] = [
        {
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
          owner: "123",
        },

        {
          name: "Sashimi",
          age: 3,
          breed: "Akita",
          id: "122323123",
          personality: "beach",
          picture: "Hachiko.jpg",
          title: "Beach Lover",
          toy: "Ball",
          weight: "23kg",
          bio: "Good dog",
          owner: "123",
        },
      ];
      const expectedDogsTwoAdded: IDog[] = mockAllDogsTwoAdded;

      const loadAction = loadMoreAllDogsActionCreator(dogsToAdd);
      const actualDogsTwoAdded = dogsReducer(actualDogs, loadAction);

      expect(expectedDogsTwoAdded).toEqual(actualDogsTwoAdded);
    });
  });
});

describe("Given a loadMoreFavDogs slice", () => {
  describe("When its invoked with two lists of dogs", () => {
    test("Then it should return the same a list with both previous lists together", () => {
      const actualDogs: IDog[] = mockAllFavDogs;
      const favDogsToAdd: IDog[] = [
        {
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
          owner: "123",
        },

        {
          name: "Sashimi",
          age: 3,
          breed: "Akita",
          id: "122323123",
          personality: "beach",
          picture: "Hachiko.jpg",
          title: "Beach Lover",
          toy: "Ball",
          weight: "23kg",
          bio: "Good dog",
          owner: "123",
        },
      ];
      const expectedFavDogsTwoAdded: IDog[] = mockAllFavDogsTwoAdded;

      const loadAction = loadMoreFavDogsActionCreator(favDogsToAdd);
      const actualDogsTwoAdded = dogsReducer(actualDogs, loadAction);

      expect(expectedFavDogsTwoAdded).toEqual(actualDogsTwoAdded);
    });
  });
});
