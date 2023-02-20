import { useState } from "react";
import styled from "styled-components";
import Search from "@/components/Search/Search";
import Selector from "@/components/Selector/Selector";

const options = [
  { label: "Africa", value: "Africa" },
  { label: "America", value: "America" },
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
  margin-bottom: 2rem;
`;

const SearchSettings = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <Selector options={options} setSelect={setSelect} />
    </Wrapper>
  );
};

export default SearchSettings;
