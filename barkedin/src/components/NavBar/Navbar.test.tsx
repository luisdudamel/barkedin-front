import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Navbar";

let mockPath: string;
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockPath }),
  useNavigate: () => mockNavigate,
}));

describe("Given a Navbar function", () => {
  describe("When its invoked and the path is 'home' and the user clicks on home icon", () => {
    test("Then it should render a home image with the alt text 'Home navbar active icon' and call navigate", () => {
      const expectedHomeText = "Home navbar active icon";
      mockPath = "/barkedin/home";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedHomeButton = screen.getByAltText(expectedHomeText);
      userEvent.click(expectedHomeButton);

      expect(expectedHomeButton).toBeInTheDocument();
      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
    });
  });

  describe("When its invoked and the path is 'dates'", () => {
    test("Then it should render a dates image with the alt text 'Dates navbar active icon'", () => {
      const expectedDatesText = "Meetings navbar active icon";
      mockPath = "/barkedin/meetings";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedDatesButton = screen.getByAltText(expectedDatesText);
      userEvent.click(expectedDatesButton);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
      expect(expectedDatesButton).toBeInTheDocument();
    });
  });

  describe("When its invoked and the path is 'profile'", () => {
    test("Then it should render a profile image with the alt text 'Favorites navbar active icon'", () => {
      const expectedProfileText = "Profile navbar active icon";
      mockPath = "/barkedin/profile";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedProfileButton = screen.getByAltText(expectedProfileText);
      userEvent.click(expectedProfileButton);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
      expect(expectedProfileButton).toBeInTheDocument();
    });
  });

  describe("When its invoked and the path is 'favorites'", () => {
    test("Then it should render a favorites image with the alt text 'Favorites navbar active icon'", () => {
      const expectedFavoritesText = "Favorites navbar active icon";
      mockPath = "/barkedin/friends";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedFavoritesButton = screen.getByAltText(
        expectedFavoritesText
      );
      userEvent.click(expectedFavoritesButton);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
      expect(expectedFavoritesButton).toBeInTheDocument();
    });
  });
});
