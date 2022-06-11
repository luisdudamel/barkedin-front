import axios from "axios";
import { mockFavDog, mockFavDogs } from "../../mocks/dogs";
import {
  deleteFavDogActionCreator,
  loadFavDogsActionCreator,
} from "../feature/dogsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import {
  createFavDogThunk,
  deleteFavDogThunk,
  editFavDogThunk,
  getFavDogsThunk,
} from "./dogsThunks";

describe("Given a getFavDogsThunk", () => {
  describe("When invoked with a valid username", () => {
    test("Then it should call the dispatch function with a list of dogs", async () => {
      const dispatch = jest.fn();
      const mockUser = "luis1";
      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: mockFavDogs,
        },
        status: 200,
      });

      const expectedAction = loadFavDogsActionCreator(mockFavDogs);
      const thunk = getFavDogsThunk(mockUser);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deleteFavDogThunk", () => {
  describe("When invoked with a valid id", () => {
    test("Then it should call the dispatch function the valid id", async () => {
      const dispatch = jest.fn();
      const mockId = "1234";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: mockFavDogs,
        },
        status: 200,
      });

      const expectedAction = deleteFavDogActionCreator(mockId);
      const thunk = deleteFavDogThunk(mockId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a createFavDogThunk", () => {
  describe("When invoked with a valid dog", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const newDog = mockFavDog;

      const expectedAction = loadingActionCreator({ loading: true });
      const thunk = createFavDogThunk(newDog);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a editFavDogThunk", () => {
  describe("When invoked with a valid dog and id", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const newDog = mockFavDog;
      const mockId = "1234";

      const expectedAction = loadingActionCreator({ loading: true });
      const thunk = editFavDogThunk(newDog, mockId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
