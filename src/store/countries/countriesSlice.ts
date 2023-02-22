import { RootState } from "./../index";
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCountries } from "./countriesAsyncActions";
import { CountriesState, CountriesStatus } from "./countriesTypes";
import { processedAllCountries } from "@/utils/countryProcessing";

const initialState: CountriesState = {
  countries: [],
  status: CountriesStatus.LOADING,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.pending, (state) => {
      state.status = CountriesStatus.LOADING;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.countries = processedAllCountries(action.payload);
      state.status = CountriesStatus.SUCCESS;
    });
    builder.addCase(fetchAllCountries.rejected, (state) => {
      state.countries = [];
      state.status = CountriesStatus.ERROR;
    });
  },
});

export const countriesSelect = (state: RootState) => state.countries;

export default countriesSlice.reducer;
