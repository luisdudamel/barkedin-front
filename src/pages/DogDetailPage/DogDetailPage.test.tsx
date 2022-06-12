import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import store from "../../redux/store";
import theme from "../../theme";
import { DogDetailPage } from "./DogDetailPage";

describe("Given a LoginPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetailPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
