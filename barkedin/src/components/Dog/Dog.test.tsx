import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDog, mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import { Dog } from "./Dog";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
  useAppSelector: () => "123",
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a Dog function", () => {
  describe("When invoked with a dog with the name 'Rocko", () => {
    test("Then it should render a the text 'Rocko'", () => {
      const dogToRender = mockFavDogs[0];
      const expectedText = "Rocko";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const dogRenderedText = screen.getByText(/rocko/i);

      expect(dogRenderedText).toHaveTextContent(expectedText);
    });
  });

  describe("When invoked and the user clicks on delete button", () => {
    test("Then it should call the dispatch'", () => {
      const dogToRender = mockFavDogs[0];

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const deleteButton = screen.getByAltText("Red trash can icon");
      userEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with a dog named 'Fenix' and the user clicks on the image with alt text 'Fenix avatar'", () => {
    test("Then it should call the navigate function'", () => {
      const dogToRender = mockFavDog;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const avatarImage = screen.getByAltText("Fenix avatar");
      userEvent.click(avatarImage);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked with a dog named 'Fenix' and the user clicks on the image with alt text 'Fenix personality'", () => {
    test("Then it should call the navigate function'", () => {
      const dogToRender = mockFavDog;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const personalityImage = screen.getByAltText("Fenix personality");
      userEvent.click(personalityImage);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked with a dog named 'Fenix' and the user clicks on the text 'Fenix'", () => {
    test("Then it should call the navigate function'", () => {
      const dogToRender = mockFavDog;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const nameText = screen.getByText("Fenix");
      userEvent.click(nameText);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When invoked with a dog with personality 'Ball Player' and the user clicks on the text 'Ball Player'", () => {
    test("Then it should call the navigate function'", () => {
      const dogToRender = mockFavDog;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Dog dog={dogToRender}></Dog>
          </BrowserRouter>
        </Provider>
      );

      const nameText = screen.getByText("Ball Player");
      userEvent.click(nameText);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
