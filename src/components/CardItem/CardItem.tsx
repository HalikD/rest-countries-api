import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-elem);
  border-radius: 0.3rem;
  cursor: pointer;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h2`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardInfoList = styled.ul`
  list-style: none;
`;

const CardInfoItem = styled.li`
  line-height: 1.5rem;
  font-weight: var(--fw-light);

  & > span {
    font-weight: var(--fw-bold);
  }
`;

const CardItem = () => {
  return (
    <Wrapper>
      <CardImage />
      <CardInfo>
        <CardTitle>Title</CardTitle>
        <CardInfoList>
          <CardInfoItem>
            <span></span>
          </CardInfoItem>
        </CardInfoList>
      </CardInfo>
    </Wrapper>
  );
};

export default CardItem;
