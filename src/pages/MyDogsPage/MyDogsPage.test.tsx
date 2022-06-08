import { ThemeProvider } from "@mui/material";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import theme from "../../theme";
import MyDogsPage from "./MyDogsPage";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockFavDogs,
  useAppDispatch: () => mockDispatch,
}));

describe("Given a MyDogsPage component page", () => {
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
