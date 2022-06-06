import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import CredentialsValidation from "./CredentialsValidation";

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({
    name: "Logueado",
    username: "logueado",
    logged: true,
  }),
}));

describe("Given a CredentialsValidation component", () => {
  describe("When its invoked and the user is logged in", () => {
    test("Then it should return its children", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CredentialsValidation>
              <h1>Luis</h1>
            </CredentialsValidation>
          </BrowserRouter>
        </Provider>
      );

      const headingExpected = screen.getByRole("heading", { name: /Luis/i });

      expect(headingExpected).toBeInTheDocument();
    });
  });
});
