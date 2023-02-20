import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";

const Wrapper = styled.label`
  width: 100%;
  background-color: var(--color-elem);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
`;

const Input = styled.input.attrs({ type: "search", placeholder: "Search for a country..." })`
  background-color: var(--color-elem);
  color: var(--color-text);
  border: none;
  outline: none;
  margin-left: 1rem;
`;

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
}

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <Wrapper>
      <FaSearch />
      <Input value={search} onChange={(e) => setSearch(e.target.value)} />
    </Wrapper>
  );
};

export default Search;
