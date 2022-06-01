import { loginUserThunk } from "./userThunks";

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
