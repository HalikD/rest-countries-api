import { RootState } from "@/store";
import { CountryDetailState, CountryDetailStatus } from "./countryDetailTypes";
import { createSlice } from "@reduxjs/toolkit";
import { fetchOneCountry } from "./contryDetailAsyncActions";
import { processedOneCountry } from "@/utils/countryProcessing";

const initialState: CountryDetailState = {
  country: null,
  status: CountryDetailStatus.LOADING,
};

const countryDetailSlice = createSlice({
  name: "countryDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneCountry.pending, (state) => {
      state.status = CountryDetailStatus.LOADING;
    });
    builder.addCase(fetchOneCountry.fulfilled, (state, action) => {
      state.country = processedOneCountry(action.payload);
      state.status = CountryDetailStatus.SUCCESS;
    });
    builder.addCase(fetchOneCountry.rejected, (state) => {
      state.country = null;
      state.status = CountryDetailStatus.ERROR;
    });
  },
});

export const countryDetailSelect = (state: RootState) => state.countries;

export default countryDetailSlice.reducer;
