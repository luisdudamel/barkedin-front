import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import TestRenderer from "react-test-renderer";
import theme from "../../theme";
import RegisterPageStyled from "./RegisterPageStyled";

describe("Given a RegisterPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <RegisterPageStyled></RegisterPageStyled>
          </ThemeProvider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
