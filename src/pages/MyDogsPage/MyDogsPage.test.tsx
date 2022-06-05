import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { MockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import theme from "../../theme";
import MyDogsPage from "./MyDogsPage";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => MockFavDogs,
  useAppDispatch: () => mockDispatch,
}));

describe("Given a MyDogsPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedMyDogsPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <MyDogsPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(testedMyDogsPage).toMatchSnapshot();
    });
  });
  describe("When its invoked", () => {
    test("Then it should call the dispatch function with an username'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <MyDogsPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
