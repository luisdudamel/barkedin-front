import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-test-renderer";
import { mockFavDog } from "../../mocks/dogs";

import store from "../../redux/store";
import theme from "../../theme";

import { DogDetailPage } from "./DogDetailPage";
let mockId = "123";
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useParams: () => ({
    id: mockId,
  }),
}));

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => "123",
}));

describe("Given a DogDetail component page", () => {
  describe("When it's invoked", () => {
    test("Then it should render an image with the alt text 'personality'", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <DogDetailPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const expectedImage = screen.getByAltText("personality");

      expect(expectedImage).toBeInTheDocument();
    });
  });

  describe("When it's invoked with a dog id", () => {
    test("Then it should render a dog with an image with the text 'Fenix avatar''", async () => {
      const expectedDogName = "Fenix avatar";

      axios.get = jest.fn().mockResolvedValue({
        data: {
          dog: mockFavDog,
        },
        status: 200,
      });
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(async () => {
        render(
          <Provider store={store}>
            <BrowserRouter>
              <ThemeProvider theme={theme}>
                <DogDetailPage />
              </ThemeProvider>
            </BrowserRouter>
          </Provider>
        );
      });

      const expectedText = screen.getByRole("img", {
        name: expectedDogName,
      });

      expect(expectedText).toBeInTheDocument();
    });
  });
});
