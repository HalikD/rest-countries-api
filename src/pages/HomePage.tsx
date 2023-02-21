import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import CardList from "@/components/CardList/CardList";
import { fetchAllCountries } from "@/http/countriesAPI";
import CardItem from "@/components/CardItem/CardItem";

import { IAllCountries, processedAllCountries } from "@/utils/countryProcessing";

const HomePage = () => {
  const [countries, setCountries] = useState<IAllCountries[]>([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchAllCountries()
      .then((unProcessedData) => processedAllCountries(unProcessedData))
      .then((processedData) => {
        setCountries(processedData);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (search = "", region = "All") => {
    let foundCountries;
    if (region === "All") {
      foundCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCountries(foundCountries);
      return;
    }

    foundCountries = countries
      .filter((country) => country.info["Region"] === region)
      .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));

    setFilteredCountries(foundCountries);
  };

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <>
      <SearchSettings handleSearch={handleSearch} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <CardList>
          {filteredCountries.map((country) => (
            <CardItem
              onClick={() => navigate(`/country/${country.name}`)}
              key={country.img}
              img={country.img}
              name={country.name}
              info={country.info}
            />
          ))}
        </CardList>
      )}
    </>
  );
};

export default HomePage;
