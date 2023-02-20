import { useState } from "react";
import styled from "styled-components";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import Card from "@/components/CardItem/CardItem";
import CardList from "@/components/CardList/CardList";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <SearchSettings />
      <CardList></CardList>
    </Wrapper>
  );
};

export default HomePage;
