export const processedAllCountries = (data) => {
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

export const processedOneCountry = (country) => {
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
      ["Top Level Domain"]: country.tld,
      Currencies: Object.values(country.currencies)[0]["name"],
      Languages: Object.values(country.languages).join(", "),
    },
    borders: country.borders,
  };
};

export const codeToName = (data) => {
  return data.map((country) => country.name.common);
};
