import { ThemeProvider } from "@mui/system";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDog, mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import theme from "../../theme";
import { DogDetail } from "./DogDetail";

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

describe("Given a DogDetails function", () => {
  describe("When it's invoked with a dog named 'Fenix'", () => {
    test("Then it should render an image with the alternative text 'Fenix avatar", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetail dogToShow={mockFavDog} isOwnDog={true} />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
      const expectedDogAvatar = screen.getByRole("img", {
        name: "Fenix avatar",
      });

      expect(expectedDogAvatar).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a dog named 'Fenix' and a valid id", () => {
    test("Then it should render a button with the text 'Edit profile'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetail dogToShow={mockFavDog} isOwnDog={true} />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
      const expectedEditButton = screen.getByRole("button", {
        name: "Edit profile",
      });

      expect(expectedEditButton).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a dog named 'Fenix', a valid id and the user clicks on the edit button", () => {
    test("Then it should call the navigate function'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetail dogToShow={mockFavDog} isOwnDog={true} />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );
      const expectedEditButton = screen.getByRole("button", {
        name: "Edit profile",
      });
      userEvent.click(expectedEditButton);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
