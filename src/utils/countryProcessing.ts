export const processedCountries = (data) => {
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
