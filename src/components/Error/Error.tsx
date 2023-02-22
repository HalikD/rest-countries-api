import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: var(--color-text);
  font-size: 48px;
`;

const Error = () => {
  return (
    <Wrapper>
      <Text>Ooooops!!! ERROR</Text>
    </Wrapper>
  );
};

export default Error;
