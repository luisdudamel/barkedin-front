import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import CredentialsValidation from "./CredentialsValidation";

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppSelector: () => ({
    name: "asdas",
    username: "asdasd",
    logged: false,
  }),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CredentialsValidation component", () => {
  describe("When its invoked and the user is not logged in", () => {
    test.only("Then it should call the navigate function", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CredentialsValidation>
              <h1>Luis</h1>
            </CredentialsValidation>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
