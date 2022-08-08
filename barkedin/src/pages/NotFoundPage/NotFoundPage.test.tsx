import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

describe("Given a NotFoundPage page component", () => {
  describe("When invoked", () => {
    test("Then it should render a heading with the text 'Oops.. something went wrong'", () => {
      const expectedHeadingText = "Oops.. something went wrong";

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );
      const expectedHeading = screen.getByText(expectedHeadingText);

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
