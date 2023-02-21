import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CardList = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardList;
