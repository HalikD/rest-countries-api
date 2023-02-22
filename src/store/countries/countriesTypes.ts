export interface CountriesState {
  countries: IAllCountries[];
  status: CountriesStatus;
}

export interface IAllCountries {
  name: string;
  img: string;
  info: Record<string, string>;
}

export enum CountriesStatus {
  SUCCESS = "success",
  LOADING = "loading",
  ERROR = "error",
}
