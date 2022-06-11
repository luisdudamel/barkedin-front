import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import theme from "../../theme";
import CreateEditPage from "./CreateEditPage";

describe("Given a CreateEditPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should render a register form with a button with the text 'Create'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <CreateEditPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const expectedButton = screen.getByRole("button", { name: "Create" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
