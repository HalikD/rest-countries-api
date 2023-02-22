import { IAllCountries } from "@/store/countries/countriesTypes";

export const countryFinder = (countries: IAllCountries[], search: string, region: string) => {
  let foundCountries;
  if (region === "All" || !region) {
    foundCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    return foundCountries;
  }

  foundCountries = countries
    .filter((country) => country.info["Region"] === region)
    .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));
  return foundCountries;
};
