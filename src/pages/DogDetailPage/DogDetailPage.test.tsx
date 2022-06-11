import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDogs } from "../../mocks/dogs";

import store from "../../redux/store";
import theme from "../../theme";

import { DogDetailPage } from "./DogDetailPage";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "123",
  }),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => mockFavDogs,
}));

describe("Given a DogDetail component page", () => {
  describe("When it's invoked with a valid user id", () => {
    test("Then it should render a a button with the text 'Edit profile''", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetailPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const expectedButton = screen.getByRole("button", {
        name: "Edit profile",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
