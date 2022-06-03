import { Dog } from "../../interfaces/Dogs";
import { MockFavDogs } from "../../mocks/dogs";
import dogsReducer, { loadFavDogsActionCreator } from "./dogsSlice";

describe("Given a loadFavDogs slice", () => {
  describe("When its invoked with a list of dogs", () => {
    test("Then it should return the same list of dogs", () => {
      const expectedLoadedDogs: Dog[] = MockFavDogs;
      const dogsToLoad: Dog[] = MockFavDogs;

      const loadAction = loadFavDogsActionCreator(dogsToLoad);
      const loadedFavDogs = dogsReducer(dogsToLoad, loadAction);

      expect(loadedFavDogs).toEqual(expectedLoadedDogs);
    });
  });
});
