import React from "react";
import { PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const CardList = ({ children }: PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

export default CardList;
