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
