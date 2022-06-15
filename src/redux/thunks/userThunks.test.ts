import axios from "axios";
import { loginUserThunk, registerUserThunk } from "./userThunks";

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "Disney" }));

describe("Given the loginUserThunk", () => {
  describe("When invoked with valid token", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = loginUserThunk({ username: "Pato", password: "Donald" });

      axios.post = jest.fn().mockResolvedValue({
        data: {
          token: "tokencito",
        },
        status: 200,
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with an invalid token", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = loginUserThunk({ username: "Pato", password: "Donald" });

      axios.post = jest.fn().mockRejectedValue({
        status: 200,
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the registerUserThunk", () => {
  describe("When invoked with inexistent username", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        name: "Pato",
        username: "Disney",
        password: "Donald",
      });

      axios.post = jest.fn().mockResolvedValue({
        status: 201,
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with an existent username", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        name: "Pato",
        username: "Disney",
        password: "Donald",
      });

      axios.post = jest.fn().mockRejectedValue({
        status: 400,
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
