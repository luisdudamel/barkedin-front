import axios from "axios";
import { MockFavDogs } from "../../mocks/dogs";
import { mockToken } from "../../mocks/userData";
import { loadFavDogsActionCreator } from "../feature/dogsSlice";
import { getFavDogsThunk } from "./dogsThunks";

describe("Given a getFavDogsThunk", () => {
  describe("When invoked with a valid token", () => {
    test("Then it should return call the dispatch function", async () => {
      const testToken = mockToken;
      const dispatch = jest.fn();

      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: MockFavDogs,
        },
        status: 200,
      });

      const expectedAction = loadFavDogsActionCreator(MockFavDogs);
      const thunk = getFavDogsThunk(testToken);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
