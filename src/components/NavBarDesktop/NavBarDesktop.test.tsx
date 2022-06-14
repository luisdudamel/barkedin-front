import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { NavBarDesktop } from "./NavBarDesktop";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a NavBarDesktop function", () => {
  describe("When its invoked", () => {
    test("Then it should render 4 texts with the texts 'HOME', 'MEETINGS', 'FRIENDS' and 'PROFILE'", () => {
      const expectedHomeText = "HOME";
      const expectedMeetingsText = "MEETINGS";
      const expectedFriendsText = "FRIENDS";
      const expectedProfileText = "PROFILE";

      render(
        <BrowserRouter>
          <NavBarDesktop />
        </BrowserRouter>
      );

      const expectedHomeTitle = screen.getByText(expectedHomeText);
      const expectedFriendsTitle = screen.getByText(expectedFriendsText);
      const expectedMeetingsTitle = screen.getByText(expectedMeetingsText);
      const expectedProfileTitle = screen.getByText(expectedProfileText);

      expect(expectedHomeTitle).toBeInTheDocument();
      expect(expectedFriendsTitle).toBeInTheDocument();
      expect(expectedMeetingsTitle).toBeInTheDocument();
      expect(expectedProfileTitle).toBeInTheDocument();
    });
  });

  describe("When its invoked and the user clicks on the text 'HOME'", () => {
    test("Then it should call the navigate function with the path '/home'", () => {
      const expectedHomeText = "HOME";
      const mockPath = "/home";

      render(
        <BrowserRouter>
          <NavBarDesktop />
        </BrowserRouter>
      );

      const expectedHomeTitle = screen.getByText(expectedHomeText);
      userEvent.click(expectedHomeTitle);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
    });
  });

  describe("When its invoked and the user clicks on the text 'MEETINGS'", () => {
    test("Then it should call the navigate function with the path '/home'", () => {
      const expectedMeetingsText = "MEETINGS";
      const mockPath = "/home";

      render(
        <BrowserRouter>
          <NavBarDesktop />
        </BrowserRouter>
      );

      const expectedMeetingsTitle = screen.getByText(expectedMeetingsText);
      userEvent.click(expectedMeetingsTitle);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
    });
  });

  describe("When its invoked and the user clicks on the text 'FRIENDS'", () => {
    test("Then it should call the navigate function with the path '/home'", () => {
      const expectedFriendsText = "FRIENDS";
      const mockPath = "/home";

      render(
        <BrowserRouter>
          <NavBarDesktop />
        </BrowserRouter>
      );

      const expectedFriendsTitle = screen.getByText(expectedFriendsText);
      userEvent.click(expectedFriendsTitle);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
    });
  });

  describe("When its invoked and the user clicks on the text 'PROFILE'", () => {
    test("Then it should call the navigate function with the path '/profile'", () => {
      const expectedProfileText = "PROFILE";
      const mockPath = "/profile";

      render(
        <BrowserRouter>
          <NavBarDesktop />
        </BrowserRouter>
      );

      const expectedProfileTitle = screen.getByText(expectedProfileText);
      userEvent.click(expectedProfileTitle);

      expect(mockNavigate).toHaveBeenCalledWith(mockPath);
    });
  });
});
