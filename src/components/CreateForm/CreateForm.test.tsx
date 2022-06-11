import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store";
import CreateForm from "./CreateForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a CreateForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'Create'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateForm />
          </BrowserRouter>
        </Provider>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Create",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked and an user enters a valid dog", () => {
    test("Then it should set the button 'Create' state to enabled'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateForm />
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
        name: "Create",
      });

      expect(expectedButton).toBeEnabled();
    });
  });

  describe("When invoked and an user enters valid dog data an clicks on the create button", () => {
    test("Then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateForm />
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
        name: "Create",
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
