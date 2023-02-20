import { useState, useEffect } from "react";
import styled from "styled-components";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import Card from "@/components/CardItem/CardItem";
import CardList from "@/components/CardList/CardList";
import { fetchAllCountries } from "@/http/countriesAPI";
import CardItem from "@/components/CardItem/CardItem";

import { processedCountries } from "@/utils/countryProcessing";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchAllCountries()
      .then((unProcessedData) => processedCountries(unProcessedData))
      .then((processedData) => setCountries(processedData));
  }, []);

  return (
    <Wrapper>
      <SearchSettings />
      <CardList>
        {countries.map((country) => (
          <CardItem img={country.img} name={country.name} info={country.info} />
        ))}
      </CardList>
    </Wrapper>
  );
};

export default HomePage;
