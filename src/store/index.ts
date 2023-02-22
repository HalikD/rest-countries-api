import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";
import filterReducer from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
