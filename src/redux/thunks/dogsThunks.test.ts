import axios from "axios";
import { mockAllDogs, mockFavDog, mockFavDogs } from "../../mocks/dogs";
import {
  deleteFavDogActionCreator,
  loadAllDogsActionCreator,
  loadFavDogsActionCreator,
} from "../feature/dogsSlice";
import { loadingActionCreator } from "../feature/uiSlice";
import {
  createFavDogThunk,
  deleteFavDogThunk,
  editFavDogThunk,
  getAllDogsThunk,
  getDogByIdThunk,
  getFavDogsThunk,
  loadMoreAllDogsThunk,
  loadMoreFavDogsThunk,
} from "./dogsThunks";

describe("Given a getFavDogsThunk", () => {
  describe("When invoked with a valid username", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const mockUser = "luis1";
      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: mockFavDogs,
        },
        status: 200,
      });

      loadFavDogsActionCreator(mockFavDogs);
      const thunk = getFavDogsThunk(mockUser, 0);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
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

describe("Given a loadMoreFavDogsThunk", () => {
  describe("When invoked with a valid username and page", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const mockPage = 1;
      const mockUser = "luis1";
      axios.get = jest.fn().mockResolvedValue({
        data: {
          favdogs: mockFavDogs,
        },
        status: 200,
      });

      const thunk = loadMoreFavDogsThunk(mockUser, mockPage);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a getAllDogsThunk", () => {
  describe("When invoked with a page 0 and an empty filter", () => {
    test("Then it should call the dispatch function with a list of dogs", async () => {
      const dispatch = jest.fn();
      const mockPage = 0;
      const mockFilter = "";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          dogs: { dogs: mockAllDogs },
        },
        status: 200,
      });
      const dogAction = loadAllDogsActionCreator(mockAllDogs);
      const thunk = getAllDogsThunk(mockPage, mockFilter);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(2, dogAction);
    });
  });
});

describe("Given a loadMoreAllDogsThunk", () => {
  describe("When invoked with a page 0 and an empty filter", () => {
    test("Then it should call the dispatch function", async () => {
      const dispatch = jest.fn();
      const mockPage = 0;
      const mockFilter = "";
      axios.get = jest.fn().mockResolvedValue({
        data: {
          dogs: mockAllDogs,
        },
        status: 200,
      });

      const thunk = await loadMoreAllDogsThunk(mockPage, mockFilter);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a getDogByIdThunk", () => {
  describe("When invoked with a valid dog id", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();

      const mockId = "1234";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          dog: mockFavDog,
        },
        status: 200,
      });

      const thunk = getDogByIdThunk(mockId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with an invalid dog id", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();

      const mockId = "";

      axios.get = jest.fn().mockRejectedValue({
        data: {},
        status: 400,
      });

      const thunk = getDogByIdThunk(mockId);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
