import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = BASE_URL + "all?fields=name,capital,flags,population,region";
const ONE_COUNTRY = BASE_URL + "name/";
const ALPHA_CODE = BASE_URL + "alpha?codes=";

export const fetchAllCountries = async () => {
  const { data } = await axios.get(ALL_COUNTRIES);
  return data;
};

export const fetchOneCountry = async (name) => {
  const { data } = await axios.get(ONE_COUNTRY + name);
  return data;
};

export const fetchByCodes = async (codes) => {
  const { data } = await axios.get(ALPHA_CODE + codes.join(","));
  return data;
};
