import { useState } from "react";
import styled from "styled-components";

import SearchSettings from "@/components/SearchSettings/SearchSettings";
import Card from "@/components/CardItem/CardItem";

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <SearchSettings />
      <Card />
    </Wrapper>
  );
};

export default HomePage;
