import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { LoginCredentials } from "../../interfaces/UserCredential";
import store from "../../redux/store";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a LoginForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Login'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm></LoginForm>
          </BrowserRouter>
        </Provider>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Login",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked and an user enters username, and password", () => {
    test("Then it should set the button 'Login' state to enabled'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm></LoginForm>
          </BrowserRouter>
        </Provider>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "asdasdasd");
      const passwordInput: HTMLInputElement =
        screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Login",
      });

      expect(expectedButton).toBeEnabled();
    });
  });

  describe("When invoked and an user enters username, and password and clicks on login button", () => {
    test("Then it should call the dispatch action with the same username, and password'", () => {
      const formData: LoginCredentials = {
        username: "luis1",
        password: "1234",
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm></LoginForm>
          </BrowserRouter>
        </Provider>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, formData.username);
      const passwordInput: HTMLInputElement =
        screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, formData.password);

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Login",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
