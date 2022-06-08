import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ProfileBar } from "./ProfileBar";

describe("Given a ProfileBar function", () => {
  describe("When its invoked", () => {
    test("Then it should render a button with the text 'Logout' and other with the test 'New dog'", () => {
      const expectedLogoutText = "Logout";
      const expectedNewDogText = "New dog";

      render(
        <BrowserRouter>
          <ProfileBar />
        </BrowserRouter>
      );
      const expectedLogoutButton = screen.getByRole("button", {
        name: "Logout",
      });
      const expectedNewDogButton = screen.getByRole("button", {
        name: "New dog",
      });

      expect(expectedLogoutButton).toHaveTextContent(expectedLogoutText);
      expect(expectedNewDogButton).toHaveTextContent(expectedNewDogText);
    });
  });
});
