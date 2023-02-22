import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";
import filterReducer from "./filter/filterSlice";
import countryDetailReducer from "./countryDetail/countryDetailSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    filter: filterReducer,
    countryDetail: countryDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
