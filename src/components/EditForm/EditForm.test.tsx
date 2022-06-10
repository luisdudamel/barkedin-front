import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store";
import EditForm from "./EditForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a EditForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Edit'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditForm />
          </BrowserRouter>
        </Provider>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Edit",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked and an user enters a valid dog data", () => {
    test("Then it should set the button 'Edit' state to enabled'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditForm />
          </BrowserRouter>
        </Provider>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /dog name/i,
      });
      userEvent.type(nameInput, "DogName");

      const ageInput: HTMLInputElement = screen.getByRole("spinbutton", {
        name: /age/i,
      });
      userEvent.type(ageInput, "23");

      const breedInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /breed/i,
      });
      userEvent.type(breedInput, "Cocker");

      const weightInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Weight (in kg)",
      });
      userEvent.type(weightInput, "12kg");

      const toyInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /favorite toy/i,
      });
      userEvent.type(toyInput, "asdasdasd");

      const bioInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /bio/i,
      });
      userEvent.type(bioInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Edit",
      });

      expect(expectedButton).toBeEnabled();
    });
  });

  describe("When invoked and an user enters valid dog data and clicks on edit button", () => {
    test("Then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditForm />
          </BrowserRouter>
        </Provider>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /dog name/i,
      });
      userEvent.type(nameInput, "DogName");

      const ageInput: HTMLInputElement = screen.getByRole("spinbutton", {
        name: /age/i,
      });
      userEvent.type(ageInput, "23");

      const breedInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /breed/i,
      });
      userEvent.type(breedInput, "Cocker");

      const weightInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Weight (in kg)",
      });
      userEvent.type(weightInput, "12kg");

      const toyInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /favorite toy/i,
      });
      userEvent.type(toyInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Edit",
      });

      const bioInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /bio/i,
      });
      userEvent.type(bioInput, "asdasdasd");

      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
