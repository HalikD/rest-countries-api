import { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "@/components/Search/Search";
import Selector from "@/components/Selector/Selector";
import { useDebounce } from "@/hooks/useDebounce";

const options = [
  { label: "All", value: "All" },
  { label: "Africa", value: "Africa" },
  { label: "America", value: "Americas" },
  { label: "Asia", value: "Asia" },
  { label: "Europe", value: "Europe" },
  { label: "Oceania", value: "Oceania" },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 1.5rem 0;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
  }
`;

const SearchSettings = ({ handleSearch }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    handleSearch(debouncedSearch, region);
  }, [debouncedSearch, region]);

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <Selector options={options} setRegion={setRegion} />
    </Wrapper>
  );
};

export default SearchSettings;
