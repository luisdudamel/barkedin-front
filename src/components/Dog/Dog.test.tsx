import { render, screen } from "@testing-library/react";
import { MockFavDogs } from "../../mocks/dogs";
import { Dog } from "./Dog";

describe("Given a Dog function", () => {
  describe("When invoked with a dog with the name 'Rocko", () => {
    test("Then it should render a the text 'Rocko'", () => {
      const dogToRender = MockFavDogs[0];
      const expectedText = "Rocko";

      render(<Dog dog={dogToRender}></Dog>);

      const dogRenderedText = screen.getByText(/rocko/i);

      expect(dogRenderedText).toHaveTextContent(expectedText);
    });
  });
});
