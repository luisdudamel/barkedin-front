import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
import store from "../../redux/store";
import theme from "../../theme";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });

    test("Then it should render a register form with a button with the text 'Register'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const expectedButton = screen.getByRole("button", { name: "Register" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
