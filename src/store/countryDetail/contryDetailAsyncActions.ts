import { fetchByName } from "@/http/countriesAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOneCountry = createAsyncThunk(
  "countryDetail/fetchOneCountry",
  async (name: string) => {
    const data = await fetchByName(name);
    return data;
  }
);
