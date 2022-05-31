import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
import theme from "../../theme";
import RegisterPage from "./RegisterPage";
import RegisterPageStyled from "./RegisterPageStyled";

describe("Given a RegisterPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <RegisterPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });

    test("Then it should render a register form with a button with the text 'Register'", () => {
      render(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <RegisterPage />
          </ThemeProvider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "Register" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
