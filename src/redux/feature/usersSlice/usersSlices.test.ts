import { UserState } from "../../../interfaces/UserCredential";
import usersReducer, { loginUserActionCreator } from "./usersSlice";

describe("Given a usersReducer", () => {
  describe("When it receives an object with valid name and username", () => {
    test("Then it should return the same object with the logged property set to true", () => {
      const expectedLoggedStatus = true;
      const mockUser: UserState = {
        name: "Pato",
        username: "Donald",
        id: "1234",
        logged: false,
      };
      localStorage.getItem = jest.fn().mockReturnValue("token");
      const loginAction = loginUserActionCreator(mockUser);
      const loggedUser = usersReducer(mockUser, loginAction);

      expect(loggedUser.logged).toBe(expectedLoggedStatus);
    });
  });
});
