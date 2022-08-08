import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserState } from "../../interfaces/UserCredential";
import store from "../../redux/store";
import CredentialsInValidation from "./CredentialsInValidation";

let mockUnloggedUser: UserState;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockUnloggedUser.logged,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CredentialsValidation component", () => {
  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function", () => {
      mockUnloggedUser = {
        name: "Deslogueado",
        username: "Deslogueado",
        logged: true,
        id: "123",
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CredentialsInValidation>
              <h1>Luis</h1>
            </CredentialsInValidation>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
