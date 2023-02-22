import axios from "axios";
import { IFetchManyCountries, IFetchOneCountry } from "./types";
import { ALL_COUNTRIES, ALPHA_CODE, ONE_COUNTRY, fieldsOneCountry } from "./url";

export const fetchManyCountries = async () => {
  const { data } = await axios.get<IFetchManyCountries[]>(ALL_COUNTRIES);
  return data;
};

export const fetchByName = async (name: string) => {
  const { data } = await axios.get<IFetchOneCountry[]>(ONE_COUNTRY + name + fieldsOneCountry);
  return data[0];
};

export const fetchByCodes = async (codes: string[]) => {
  const { data } = await axios.get<IFetchManyCountries[]>(ALPHA_CODE + codes.join(","));
  return data;
};
