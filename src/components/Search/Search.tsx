import styled from "styled-components";
import { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch } from "@/hooks/redux";
import { setSearch } from "@/store/filter/filterSlice";

const Wrapper = styled.label`
  width: 100%;
  background-color: var(--color-elem);
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  box-shadow: var(--shadow);

  @media screen and (min-width: 767px) {
    width: 500px;
  }
`;

const Input = styled.input.attrs({ type: "search", placeholder: "Search for a country..." })`
  width: 100%;
  background-color: var(--color-elem);
  color: var(--color-text);
  font-size: var(--fs-md);
  border: none;
  outline: none;
  margin-left: 1rem;
`;

interface SearchProps {
  search: string;
}

const Search = ({ search }: SearchProps) => {
  const [value, setValue] = useState(search);

  const dispatch = useAppDispatch();

  const debouncedSearch = useCallback(
    debounce((str: string) => dispatch(setSearch(str)), 300),
    []
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debouncedSearch(event.target.value);
  };

  return (
    <Wrapper>
      <FaSearch />
      <Input value={value} onChange={changeHandler} />
    </Wrapper>
  );
};

export default Search;
