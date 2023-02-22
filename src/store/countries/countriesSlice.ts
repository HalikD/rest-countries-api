import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllCountries } from "./countriesAsyncActions";
import { CountriesState, CountriesStatus, IAllCountries } from "./countriesTypes";
import { processedAllCountries } from "@/utils/countryProcessing";

const initialState: CountriesState = {
  countries: [],
  filteredCountries: [],
  status: CountriesStatus.LOADING,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setFilteredCountries: (state, action: PayloadAction<IAllCountries[]>) => {
      state.filteredCountries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCountries.pending, (state) => {
      state.status = CountriesStatus.LOADING;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      const processedData = processedAllCountries(action.payload);
      state.countries = processedData;
      state.filteredCountries = processedData;
      state.status = CountriesStatus.SUCCESS;
    });
    builder.addCase(fetchAllCountries.rejected, (state) => {
      state.countries = [];
      state.status = CountriesStatus.ERROR;
    });
  },
});

export const { setFilteredCountries } = countriesSlice.actions;
export const countriesSelect = (state: RootState) => state.countries;

export default countriesSlice.reducer;
