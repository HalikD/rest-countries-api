import { useState, useEffect } from "react";
import styled from "styled-components";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import CardList from "@/components/CardList/CardList";
import { fetchAllCountries } from "@/http/countriesAPI";
import CardItem from "@/components/CardItem/CardItem";

import { processedCountries } from "@/utils/countryProcessing";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  useEffect(() => {
    fetchAllCountries()
      .then((unProcessedData) => processedCountries(unProcessedData))
      .then((processedData) => setCountries(processedData));
  }, []);

  const handleSearch = (search, region) => {
    let foundCountries = [...countries];
    if (region !== "All") {
      foundCountries = foundCountries.filter((country) => country.info["Region"] === region);
    }

    foundCountries = foundCountries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCountries(foundCountries);
  };

  return (
    <Wrapper>
      <SearchSettings handleSearch={handleSearch} />
      <CardList>
        {filteredCountries.map((country) => (
          <CardItem img={country.img} name={country.name} info={country.info} />
        ))}
      </CardList>
    </Wrapper>
  );
};

export default HomePage;
