import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchManyCountries } from "@/http/countriesAPI";

export const fetchAllCountries = createAsyncThunk("countries/fetchCountries", async () => {
  const data = await fetchManyCountries();
  return data;
});
