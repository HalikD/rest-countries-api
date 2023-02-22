import axios from "axios";
import { IFetchManyCountries, IFetchOneCountry } from "./types";

const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = BASE_URL + "all";
const fieldsAllCountries = "?fields=name,capital,flags,population,region";

const ONE_COUNTRY = BASE_URL + "name/";
const fieldsOneCountry =
  "?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders";

const ALPHA_CODE = BASE_URL + "alpha?codes=";

export const fetchManyCountries = async () => {
  const { data } = await axios.get<IFetchManyCountries[]>(ALL_COUNTRIES + fieldsAllCountries);
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
