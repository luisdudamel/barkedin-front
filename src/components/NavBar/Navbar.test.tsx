import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Navbar";

let mockPath: string;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: mockPath }),
}));

describe("Given a Navbar function", () => {
  describe("When its invoked and the path is 'home'", () => {
    test("Then it should render a home image with the alt text 'Home navbar active icon'", () => {
      const expectedHomeText = "Home navbar active icon";
      mockPath = "/home";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedHomeButton = screen.getByAltText(expectedHomeText);

      expect(expectedHomeButton).toBeInTheDocument();
    });
  });

  describe("When its invoked and the path is 'dates'", () => {
    test("Then it should render a dates image with the alt text 'Dates navbar active icon'", () => {
      const expectedHomeText = "Dates navbar active icon";
      mockPath = "/dates";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedHomeButton = screen.getByAltText(expectedHomeText);

      expect(expectedHomeButton).toBeInTheDocument();
    });
  });

  describe("When its invoked and the path is 'profile'", () => {
    test("Then it should render a profile image with the alt text 'Favorites navbar active icon'", () => {
      const expectedHomeText = "Profile navbar active icon";
      mockPath = "/profile";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedHomeButton = screen.getByAltText(expectedHomeText);

      expect(expectedHomeButton).toBeInTheDocument();
    });
  });

  describe("When its invoked and the path is 'favorites'", () => {
    test("Then it should render a favorites image with the alt text 'Favorites navbar active icon'", () => {
      const expectedHomeText = "Favorites navbar active icon";
      mockPath = "/favorites";

      render(
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      );
      const expectedHomeButton = screen.getByAltText(expectedHomeText);

      expect(expectedHomeButton).toBeInTheDocument();
    });
  });
});
