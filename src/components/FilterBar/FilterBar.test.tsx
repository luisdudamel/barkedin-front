import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FilterBar } from "./FilterBar";

const mockFilterAction = jest.fn();

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Filterbar function", () => {
  describe("When its invoked", () => {
    test("Then it should render 4 buttons with an image with the alternative texts 'ball, beach, nature, frisbee and walker' filter icon", () => {
      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedBallButtonText = screen.getByAltText(
        "Ball filter icon inactive"
      );
      const expectedBeachButtonText = screen.getByAltText(
        "Beach filter icon inactive"
      );
      const expectedNatureButtonText = screen.getByAltText(
        "Nature filter icon inactive"
      );
      const expectedFrisbeeButtonText = screen.getByAltText(
        "Frisbee filter icon inactive"
      );
      const expectedWalkerButtonText = screen.getByAltText(
        "Walker filter icon inactive"
      );

      expect(expectedBallButtonText).toBeInTheDocument();
      expect(expectedBeachButtonText).toBeInTheDocument();
      expect(expectedNatureButtonText).toBeInTheDocument();
      expect(expectedFrisbeeButtonText).toBeInTheDocument();
      expect(expectedWalkerButtonText).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the image with the alt text 'Ball filter icon inactive'", () => {
    test("Then it should render an image with the alt text 'Ball filter icon active'", () => {
      const expectedAltText = "Ball filter icon active";

      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedBallButtonText = screen.getByAltText(
        "Ball filter icon inactive"
      );

      userEvent.click(expectedBallButtonText);

      const expectedBallButtonActive = screen.getByAltText(expectedAltText);

      expect(expectedBallButtonActive).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the image with the alt text 'Beach filter icon inactive'", () => {
    test("Then it should render an image with the alt text 'Beach filter icon active'", () => {
      const expectedAltText = "Beach filter icon active";

      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedBeachButtonText = screen.getByAltText(
        "Beach filter icon inactive"
      );

      userEvent.click(expectedBeachButtonText);

      const expectedBeachButtonActive = screen.getByAltText(expectedAltText);

      expect(expectedBeachButtonActive).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the image with the alt text 'Nature filter icon inactive'", () => {
    test("Then it should render an image with the alt text 'Nature filter icon active'", () => {
      const expectedAltText = "Nature filter icon active";

      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedNatureButtonText = screen.getByAltText(
        "Nature filter icon inactive"
      );

      userEvent.click(expectedNatureButtonText);

      const expectedNatureButtonActive = screen.getByAltText(expectedAltText);

      expect(expectedNatureButtonActive).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the image with the alt text 'Frisbee filter icon inactive'", () => {
    test("Then it should render an image with the alt text 'Frisbee filter icon active'", () => {
      const expectedAltText = "Frisbee filter icon active";

      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedFrisbeeButtonText = screen.getByAltText(
        "Frisbee filter icon inactive"
      );

      userEvent.click(expectedFrisbeeButtonText);

      const expectedFrisbeeButtonActive = screen.getByAltText(expectedAltText);

      expect(expectedFrisbeeButtonActive).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the image with the alt text 'Walker filter icon inactive'", () => {
    test("Then it should render an image with the alt text 'Walker filter icon active'", () => {
      const expectedAltText = "Walker filter icon active";

      render(<FilterBar filterAction={mockFilterAction} />);

      const expectedWalkerButtonText = screen.getByAltText(
        "Walker filter icon inactive"
      );

      userEvent.click(expectedWalkerButtonText);

      const expectedWalkerButtonActive = screen.getByAltText(expectedAltText);

      expect(expectedWalkerButtonActive).toBeInTheDocument();
    });
  });
});
