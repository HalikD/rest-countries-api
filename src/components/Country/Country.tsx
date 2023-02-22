import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "@/components/Button/Button";
import { fetchByCodes } from "@/http/countriesAPI";
import { codeToName } from "@/utils/countryProcessing";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4rem 0;
  gap: 3rem;

  @media screen and (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 3rem;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const CountryImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CountryBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

const CountryName = styled.h2`
  font-weight: var(--fw-bold);
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    gap: 2rem;
  }

  @media screen and (min-width: 1024px) {
    gap: 6rem;
  }
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

    @media screen and (min-width: 767px) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 767px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
  }
`;

const CountryBorderList = styled.div`
  display: flex;
  align-items: center;
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
  const [borderCountries, setBorderCountries] = useState<string[]>([]);

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
      <CountryBody>
        <CountryName>{name}</CountryName>
        <CountryInfo>
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
        </CountryInfo>

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
      </CountryBody>
    </Wrapper>
  );
};

export default Country;
