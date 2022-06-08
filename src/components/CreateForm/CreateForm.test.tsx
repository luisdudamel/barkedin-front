import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { UserCredential } from "../../interfaces/UserCredential";
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
        name: "Weight",
      });
      userEvent.type(weightInput, "12kg");

      const toyInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /favorite toy/i,
      });
      userEvent.type(toyInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Create",
      });

      expect(expectedButton).toBeEnabled();
    });
  });

  describe("When invoked and an user enters username, name, and password and clicks on register button", () => {
    test("Then it should call the dispatch action with the same username, name, and password'", () => {
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
        name: "Weight",
      });
      userEvent.type(weightInput, "12kg");

      const toyInput: HTMLInputElement = screen.getByRole("textbox", {
        name: /favorite toy/i,
      });
      userEvent.type(toyInput, "asdasdasd");

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "Create",
      });

      userEvent.click(expectedButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
