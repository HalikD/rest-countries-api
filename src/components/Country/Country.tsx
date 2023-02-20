import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchByCodes } from "@/http/countriesAPI";
import styled from "styled-components";
import Button from "../Button/Button";
import { codeToName } from "@/utils/countryProcessing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 3rem;
`;

const CountryImage = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  box-shadow: var(--shadow);
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const CountryName = styled.h2`
  font-weight: var(--fw-bold);
`;

const CountryInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
`;

const CountryInfoItem = styled.li`
  line-height: 1.5rem;
  font-size: var(--fs-sm);
  font-weight: var(--fw-light);

  & span {
    font-weight: var(--fw-normal);
  }
`;

const CountryBorder = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-weight: var(--fw-normal);
    margin-bottom: 1.5rem;
  }
`;

const CountryBorderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface CountryProps {
  name: string;
  img: string;
  mainInfo: Record<string, string>;
  altInfo: Record<string, string>;
  borders: string[];
}

const Country = ({ name, img, mainInfo, altInfo, borders = [] }: CountryProps) => {
  const [borderCountries, setBorderCountries] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchByCodes(borders)
      .then((codes) => codeToName(codes))
      .then((countries) => setBorderCountries(countries));
  }, [borders]);
  return (
    <Wrapper>
      <CountryImage src={img} alt={name} />
      <CountryInfo>
        <CountryName>{name}</CountryName>
        <CountryInfoList>
          {Object.entries(mainInfo).map(([title, value]) => (
            <CountryInfoItem key={title}>
              <span>{title}: </span>
              {value}
            </CountryInfoItem>
          ))}
        </CountryInfoList>
        <CountryInfoList>
          {Object.entries(altInfo).map(([title, values]) => (
            <CountryInfoItem key={title}>
              <span>{title}: </span>
              {values}
            </CountryInfoItem>
          ))}
        </CountryInfoList>
        <CountryBorder>
          <span>Border Countries:</span>
          {!borders.length ? (
            "No match"
          ) : (
            <CountryBorderList>
              {borderCountries.map((item) => (
                <Button key={item} onClick={() => navigate(`/country/${item}`)}>
                  {item}
                </Button>
              ))}
            </CountryBorderList>
          )}
        </CountryBorder>
      </CountryInfo>
    </Wrapper>
  );
};

export default Country;
