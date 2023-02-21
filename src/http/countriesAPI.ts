import axios from "axios";

export interface IFetchManyCountries {
  name: Record<string, string>;
  capital: string;
  flags: Record<string, string>;
  population: number;
  region: string;
}

export interface IFetchOneCountry {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, Record<string, string>>;
  };
  capital: string;
  flags: Record<string, string>;
  population: number;
  region: string;
  subregion: string;
  tld: string[];
  currencies: Record<string, Record<string, string>>;
  languages: Record<string, string>;
  borders: string[];
}

const BASE_URL = "https://restcountries.com/v3.1/";

const ALL_COUNTRIES = BASE_URL + "all";
const fieldsAllCountries = "?fields=name,capital,flags,population,region";

const ONE_COUNTRY = BASE_URL + "name/";
const fieldsOneCountry =
  "?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders";

const ALPHA_CODE = BASE_URL + "alpha?codes=";

export const fetchAllCountries = async () => {
  const { data } = await axios.get<IFetchManyCountries[]>(ALL_COUNTRIES + fieldsAllCountries);
  return data;
};

export const fetchOneCountry = async (name: string) => {
  const { data } = await axios.get<IFetchOneCountry[]>(ONE_COUNTRY + name + fieldsOneCountry);
  return data;
};

export const fetchByCodes = async (codes: string[]) => {
  const { data } = await axios.get<IFetchManyCountries[]>(ALPHA_CODE + codes.join(","));
  return data;
};
