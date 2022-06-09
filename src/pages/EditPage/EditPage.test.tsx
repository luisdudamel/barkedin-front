import { ThemeProvider } from "@mui/material";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store";
import theme from "../../theme";
import EditPage from "./EditPage";

describe("Given a EditPage component page", () => {
  describe("When it's invoked", () => {
    test("Then it should render a register form with a button with the text 'Edit'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <EditPage />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      const expectedButton = screen.getByRole("button", { name: "Edit" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
