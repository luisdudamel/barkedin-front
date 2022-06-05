import { render, screen } from "@testing-library/react";
import { MockFavDogs } from "../../mocks/dogs";
import { DogList } from "../../components/DogList/DogList";

describe("Given a DogList function", () => {
  describe("When invoked with an group of 6 dogs", () => {
    test("Then it should render 6 Dog components", () => {
      const mockedDogList = MockFavDogs;
      const expectedDogsQuantity = 6;

      render(<DogList dogs={mockedDogList}></DogList>);

      const expectedDogs = screen.getAllByRole("button");

      expect(expectedDogs).toHaveLength(expectedDogsQuantity);
    });
  });
});
