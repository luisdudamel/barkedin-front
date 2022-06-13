import { ThemeProvider } from "@mui/system";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import theme from "../../theme";
import HomePage from "./HomePage";

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

  useAppDispatch: () => mockDispatch,
}));

describe("Given a Home component page", () => {
  describe("When its invoked and the user clicks on the button with the text 'Load more'", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const loadMoreButton = screen.getByRole("button", { name: "Load more" });
      userEvent.click(loadMoreButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When its invoked and the user clicks on the image with the alt text 'Ball filter icon inactive'", () => {
    test("Then it should call the dispatch function", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const ballFilterButton = screen.getByAltText("Ball filter icon inactive");
      userEvent.click(ballFilterButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When its invoked and the user clicks on the image with alt text 'Home navbar active icon''", () => {
    test("Then it should scroll to the top of the page", () => {
      mockPath = "/home";
      const mockScroll = jest.fn();
      global.scrollTo = mockScroll;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <HomePage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const homeButton = screen.getByRole("img", {
        name: "Home navbar active icon",
      });
      userEvent.click(homeButton);

      expect(mockScroll).toHaveBeenCalled();
    });
  });
});
