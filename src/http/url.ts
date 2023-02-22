export const BASE_URL = "https://restcountries.com/v3.1/";

const fieldsAllCountries = "?fields=name,capital,flags,population,region";
export const ALL_COUNTRIES = BASE_URL + "all" + fieldsAllCountries;

export const fieldsOneCountry =
  "?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders";
export const ONE_COUNTRY = BASE_URL + "name/";

export const ALPHA_CODE = BASE_URL + "alpha?codes=";
