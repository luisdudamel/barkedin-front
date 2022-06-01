import axios from "axios";
import { loginUserThunk, registerUserThunk } from "./userThunks";

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "Disney" }));

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      const dispatch = jest.fn();

      const thunk = loginUserThunk({ username: "Pato", password: "Donald" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the registerUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function will be called", async () => {
      axios.post = jest.fn().mockResolvedValue("mockresponse");
      const dispatch = jest.fn();
      const thunk = registerUserThunk({
        name: "Pato",
        username: "Disney",
        password: "Donald",
      });

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
