import { render, screen } from "@testing-library/react";
import { mockFavDogs } from "../../mocks/dogs";
import { DogList } from "../../components/DogList/DogList";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("Given a DogList function", () => {
  describe("When invoked with an group of 6 dogs", () => {
    test("Then it should render 6 Dog components", () => {
      const mockedDogList = mockFavDogs;
      const expectedDogsQuantity = 6;

      render(
        <Provider store={store}>
          <DogList dogs={mockedDogList}></DogList>
        </Provider>
      );

      const expectedDogs = screen.getAllByRole("button");

      expect(expectedDogs).toHaveLength(expectedDogsQuantity);
    });
  });
});
