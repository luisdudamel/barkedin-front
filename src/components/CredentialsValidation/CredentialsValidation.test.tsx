import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import CredentialsValidation from "./CredentialsValidation";

let mockLogged: boolean;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({
    name: "asdas",
    username: "asdasd",
    logged: mockLogged,
  }),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("jwt-decode", () => () => "Tokencito");

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

beforeEach(() => {
  window.localStorage.removeItem("token");
});

describe("Given a CredentialsValidation component", () => {
  describe("When its invoked and the user is logged in", () => {
    test("Then it should return its children", () => {
      saveToStorage("token");
      mockLogged = true;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CredentialsValidation>
              <h1>Luis</h1>
            </CredentialsValidation>
          </BrowserRouter>
        </Provider>
      );

      const headingExpected = screen.getByRole("heading", { name: /Luis/i });

      expect(headingExpected).toBeInTheDocument();
    });
  });

  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function", () => {
      mockLogged = false;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CredentialsValidation>
              <h1>Luis</h1>
            </CredentialsValidation>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
