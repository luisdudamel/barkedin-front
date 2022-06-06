import axios from "axios";
import { mockFavDogs } from "../../mocks/dogs";
import { loadFavDogsActionCreator } from "../feature/dogsSlice";
import { getFavDogsThunk } from "./dogsThunks";

describe("Given a getFavDogsThunk", () => {
  describe("When invoked with a valid token", () => {
    test("Then it should return call the dispatch function", async () => {
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: mockFavDogs,
        },
        status: 200,
      });

      const expectedAction = loadFavDogsActionCreator(mockFavDogs);
      const thunk = getFavDogsThunk("luis1");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
