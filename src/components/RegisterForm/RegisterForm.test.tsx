import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserCredential } from "../../interfaces/UserCredential";
import store from "../../redux/store";
import RegisterForm from "./RegisterForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Register'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm></RegisterForm>
          </BrowserRouter>
        </Provider>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Register",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked and an user enters username, name, and password", () => {
    test("Then it should set the button 'Register' state to enabled'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm></RegisterForm>
          </BrowserRouter>
        </Provider>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Name",
      });
      userEvent.type(nameInput, "asdasdasd");
      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "asdasdasd");
      const passwordInput: HTMLInputElement =
        screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Register",
      });

      expect(expectedButton).toBeEnabled();
    });
  });

  describe("When invoked and an user enters username, name, and password and clicks on register button", () => {
    test("Then it should call the dispatch action with the same username, name, and password'", () => {
      const formData: UserCredential = {
        name: "Luis",
        username: "luis1",
        password: "12344",
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm></RegisterForm>
          </BrowserRouter>
        </Provider>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Name",
      });
      userEvent.type(nameInput, formData.name);
      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, formData.username);
      const passwordInput: HTMLInputElement =
        screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, formData.password);

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Register",
      });
      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
