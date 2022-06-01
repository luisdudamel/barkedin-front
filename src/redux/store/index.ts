import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "../feature/usersSlice/uiSlice";
import userSliceReducer from "../feature/usersSlice/usersSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    ui: uiSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
