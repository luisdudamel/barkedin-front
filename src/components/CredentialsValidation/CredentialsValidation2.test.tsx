import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import CredentialsValidation from "./CredentialsValidation";

let mockedToken: string | any;
let mockLogged: boolean;

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({
    name: "asdas",
    username: "asdasd",
    logged: mockLogged,
  }),
}));

mockedToken = "Tokencito";
jest.mock("jwt-decode", () => () => mockedToken);
const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

window.localStorage.removeItem("tokencito");

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

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
});
