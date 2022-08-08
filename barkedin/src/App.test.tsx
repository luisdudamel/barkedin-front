import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { IDog } from "./interfaces/Dogs";
import { UserState } from "./interfaces/UserCredential";
import { mockAllDogs } from "./mocks/dogs";

let mockAllDogsToLoad: IDog[] = mockAllDogs;
const mockDispatch = jest.fn();

jest.mock("./redux/hooks", () => ({
  ...jest.requireActual("./redux/hooks"),
  useAppSelector: () => mockAllDogsToLoad,
  useAppDispatch: () => mockDispatch,
}));

jest.mock("jwt-decode", () => () => ({
  id: "123",
  name: "luis",
  username: "luis1",
  logged: true,
}));

const mockInitialState: UserState = {
  name: "Luis",
  username: "luis1",
  logged: true,
  id: "1234",
};

const mockInitialDogs: IDog[] = mockAllDogs;

describe("Given an App component", () => {
  describe("When its invoked and the user is logged", () => {
    test("Then it should call the dispatch function", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: mockInitialState,
        reducers: {},
      });
      const dogsMockSlice = createSlice({
        name: "dogs",
        initialState: { mockInitialDogs },
        reducers: {},
      });

      const uiMockSlice = createSlice({
        name: "ui",
        initialState: false,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: {
          pets: dogsMockSlice.reducer,
          user: userMockSlice.reducer,
          ui: uiMockSlice.reducer,
        },
      });
      Object.defineProperty(window, "localStorage", {
        value: { getItem: jest.fn(() => "token") },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
