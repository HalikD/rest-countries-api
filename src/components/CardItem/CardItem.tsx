import styled from "styled-components";

const Wrapper = styled.div`
  background-color: var(--color-elem);
  border-radius: 0.3rem;
  cursor: pointer;
  box-shadow: var(--shadow);
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 1.5rem 1rem 2rem;
`;

const CardName = styled.h2`
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  margin-bottom: 1rem;
`;

const CardInfoList = styled.ul`
  list-style: none;
`;

const CardInfoItem = styled.li`
  line-height: 1.5rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);

  & > span {
    font-weight: var(--fw-normal);
  }
`;

interface CardItemProps {
  img: string;
  name: string;
  info: { Population: string; Rating: string; Capital: string };
}

const CardItem = ({ img, name, info }: CardItemProps) => {
  return (
    <Wrapper>
      <CardImage src={img} />
      <CardInfo>
        <CardName>{name}</CardName>
        <CardInfoList>
          {Object.entries(info).map(([title, value]) => (
            <CardInfoItem key={title}>
              <span>{title}: </span>
              {value}
            </CardInfoItem>
          ))}
        </CardInfoList>
      </CardInfo>
    </Wrapper>
  );
};

export default CardItem;
