import { configureStore } from "@reduxjs/toolkit";
import dogsSliceReducer from "../feature/dogsSlice";
import meetingsSliceReducer from "../feature/meetingsSlice";
import uiSliceReducer from "../feature/uiSlice";
import userSliceReducer from "../feature/usersSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    ui: uiSliceReducer,
    dogs: dogsSliceReducer,
    meetings: meetingsSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
