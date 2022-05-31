import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Register'", () => {
      render(<RegisterForm></RegisterForm>);
      const expectedButton = screen.getByRole("button", { name: "Register" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
