import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Register'", () => {
      render(<RegisterForm></RegisterForm>);
      const expectedButton = screen.getByRole("button", { name: "Register" });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked and an user enters username, name, and password", () => {
    test("Then it should set the button 'Register' state to enabled'", () => {
      render(<RegisterForm></RegisterForm>);

      const nameInput = screen.getByRole("textbox", { name: "Name" });
      userEvent.type(nameInput, "asdasdasd");
      const usernameInput = screen.getByRole("textbox", { name: "Username" });
      userEvent.type(usernameInput, "asdasdasd");
      const passwordInput = screen.getByLabelText(/password/i);
      userEvent.type(passwordInput, "asdasdasd");

      const expectedButton = screen.getByRole("button", { name: "Register" });

      expect(expectedButton).toBeEnabled();
    });
  });
});
