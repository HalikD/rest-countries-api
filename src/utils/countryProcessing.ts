import { IFetchManyCountries, IFetchOneCountry } from "@/http/countriesAPI";

export interface IAllCountries {
  name: string;
  img: string;
  info: Record<string, string>;
}

export interface IOneCountry {
  name: string;
  img: string;
  mainInfo: Record<string, string>;
  altInfo: Record<string, string>;
  borders: string[];
}

export const processedAllCountries = (data: IFetchManyCountries[]) => {
  return data.map((country) => {
    return {
      name: country.name.official,
      img: country.flags.png,
      info: {
        Population: country.population.toLocaleString("en-US"),
        Region: country.region,
        Capital: country.capital,
      },
    };
  });
};

export const processedOneCountry = (country: IFetchOneCountry) => {
  return {
    name: country.name.common,
    img: country.flags.png,
    mainInfo: {
      ["Native Name"]: Object.values(country.name.nativeName)[0]["common"],
      Population: country.population.toLocaleString("en-US"),
      Region: country.region,
      ["Sub Region"]: country.subregion,
      Capital: country.capital,
    },
    altInfo: {
      ["Top Level Domain"]: country.tld.join(", "),
      Currencies: Object.values(country.currencies)[0]["name"],
      Languages: Object.values(country.languages).join(", "),
    },
    borders: country.borders,
  };
};

export const codeToName = (data: IFetchManyCountries[]) => {
  return data.map((country) => country.name.common);
};
