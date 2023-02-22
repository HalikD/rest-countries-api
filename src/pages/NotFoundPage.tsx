import styled from "styled-components";
import UFO from "@/assets/UFO.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  font-size: 32px;
  font-weight: var(--fw-bold);
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Image src={UFO} />
      <Text>
        <h2>404</h2>
        <p>This page was taken by a UFO</p>
      </Text>
    </Wrapper>
  );
};

export default NotFoundPage;
