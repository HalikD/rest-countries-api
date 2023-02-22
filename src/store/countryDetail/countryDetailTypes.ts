export interface CountryDetailState {
  country: IOneCountry | null;
  status: CountryDetailStatus;
}

export interface IOneCountry {
  name: string;
  img: string;
  mainInfo: Record<string, string>;
  altInfo: Record<string, string>;
  borders: string[];
}

export enum CountryDetailStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
