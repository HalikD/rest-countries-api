export const processedCountries = (data) => {
  return data.map((country) => {
    return {
      name: country.name.official,
      img: country.flags.png,
      info: [
        { title: "Population", desc: country.population.toLocaleString("en-US") },
        { title: "Region", desc: country.region },
        { title: "Capital", desc: country.capital },
      ],
    };
  });
};
