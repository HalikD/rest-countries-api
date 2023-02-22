import { useEffect } from "react";
import styled from "styled-components";
import Search from "@/components/Search/Search";
import Selector from "@/components/Selector/Selector";
import { useAppSelector } from "@/hooks/redux";

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

interface SearchSettingsProps {
  handleSearch: (search: string, region: string) => void;
}

const SearchSettings = ({ handleSearch }: SearchSettingsProps) => {
  const { search, region } = useAppSelector((state) => state.filter);

  useEffect(() => {
    handleSearch(search, region);
  }, [search, region]);

  return (
    <Wrapper>
      <Search search={search} />
      <Selector region={region} />
    </Wrapper>
  );
};

export default SearchSettings;
