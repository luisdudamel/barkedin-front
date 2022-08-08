import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import { ProfileBar } from "./ProfileBar";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a ProfileBar function", () => {
  describe("When its invoked", () => {
    test("Then it should render a button with the text 'Logout' and other with the test 'New dog'", () => {
      const expectedLogoutText = "Logout";
      const expectedNewDogText = "New dog";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileBar />
          </BrowserRouter>
        </Provider>
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

  describe("When its invoked and the user clicks on the Logout button", () => {
    test("Then it should call navigate function to path '/login''", () => {
      const expectedCalledPath = "/login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileBar />
          </BrowserRouter>
        </Provider>
      );
      const expectedLogoutButton = screen.getByRole("button", {
        name: "Logout",
      });

      userEvent.click(expectedLogoutButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedCalledPath);
    });
  });

  describe("When its invoked and the user clicks on the 'New dog' button", () => {
    test("Then it should call navigate function to path '/create''", () => {
      const expectedCalledPath = "/create";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileBar />
          </BrowserRouter>
        </Provider>
      );
      const expectedCreateButton = screen.getByRole("button", {
        name: "New dog",
      });

      userEvent.click(expectedCreateButton);

      expect(mockNavigate).toHaveBeenCalledWith(expectedCalledPath);
    });
  });
});
