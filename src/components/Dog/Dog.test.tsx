import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import { Dog } from "./Dog";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
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
    test("Then it should dispatch action'", () => {
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
});
