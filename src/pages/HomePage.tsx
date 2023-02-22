import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import CardList from "@/components/CardList/CardList";
import CardItem from "@/components/CardItem/CardItem";
import Loader from "@/components/Loader/Loader";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";

import { countriesSelect } from "@/store/countries/countriesSlice";
import { fetchAllCountries } from "@/store/countries/countriesAsyncActions";

const HomePage = () => {
  const { countries, status } = useAppSelector(countriesSelect);
  const dispatch = useAppDispatch();

  const [filteredCountries, setFilteredCountries] = useState(countries);

  const navigate = useNavigate();

  useEffect(() => {
    if (countries.length) return;
    dispatch(fetchAllCountries());
  }, []);

  const handleSearch = (search = "", region = "") => {
    let foundCountries;
    if (region === "All" || !region) {
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
      {status === "loading" ? (
        <Loader />
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
