import React from "react";
import styled from "styled-components";
import loader from "@/assets/loader.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8rem;
  animation: roll 1s linear infinite;

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Image src={loader} />
    </Wrapper>
  );
};

export default Loader;
