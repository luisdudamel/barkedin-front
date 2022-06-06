import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockFavDogs } from "../../mocks/dogs";
import store from "../../redux/store";
import { Dog } from "./Dog";

describe("Given a Dog function", () => {
  describe("When invoked with a dog with the name 'Rocko", () => {
    test("Then it should render a the text 'Rocko'", () => {
      const dogToRender = mockFavDogs[0];
      const expectedText = "Rocko";

      render(
        <Provider store={store}>
          <Dog dog={dogToRender}></Dog>
        </Provider>
      );

      const dogRenderedText = screen.getByText(/rocko/i);

      expect(dogRenderedText).toHaveTextContent(expectedText);
    });
  });
});
