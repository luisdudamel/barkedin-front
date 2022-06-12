import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import theme from "../../theme";
import MyDogsPage from "./MyDogsPage";

const mockDispatch = jest.fn();
let mockPath: string;
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockPath }),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockFavDogs,
  useAppDispatch: () => mockDispatch,
}));

describe("Given a MyDogsPage component page", () => {
  describe("When its invoked and the user clicks on the button with the text 'Load more'", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <MyDogsPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const loadMoreButton = screen.getByRole("button", { name: "Load more" });
      userEvent.click(loadMoreButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When its invoked and the user clicks on the image with alt text 'Profile navbar active icon''", () => {
    test("Then it should scroll to the top of the page", () => {
      mockPath = "/profile";
      const mockScroll = jest.fn();
      global.scrollTo = mockScroll;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <MyDogsPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const loadMoreButton = screen.getByRole("img", {
        name: "Profile navbar active icon",
      });
      userEvent.click(loadMoreButton);

      expect(mockScroll).toHaveBeenCalled();
    });
  });
});
