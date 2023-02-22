import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import CardList from "@/components/CardList/CardList";
import CardItem from "@/components/CardItem/CardItem";
import Loader from "@/components/Loader/Loader";

import { useAppSelector, useAppDispatch } from "@/hooks/redux";

import { countriesSelect, setFilteredCountries } from "@/store/countries/countriesSlice";
import { fetchAllCountries } from "@/store/countries/countriesAsyncActions";
import { countryFinder } from "@/utils/countryFinder";

const HomePage = () => {
  const { countries, filteredCountries, status } = useAppSelector(countriesSelect);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (countries.length) return;
    dispatch(fetchAllCountries());
  }, []);

  const handleSearch = (search: string, region: string) => {
    dispatch(setFilteredCountries(countryFinder(countries, search, region)));
  };

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
