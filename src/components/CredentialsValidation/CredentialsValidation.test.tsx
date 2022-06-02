import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
        <BrowserRouter>
          <CredentialsValidation>
            <h1>Luis</h1>
          </CredentialsValidation>
        </BrowserRouter>
      );

      const headingExpected = screen.getByRole("heading", { name: /Luis/i });

      expect(headingExpected).toBeInTheDocument();
    });
  });

  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function", () => {
      mockLogged = false;

      render(
        <BrowserRouter>
          <CredentialsValidation>
            <h1>Luis</h1>
          </CredentialsValidation>
        </BrowserRouter>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
