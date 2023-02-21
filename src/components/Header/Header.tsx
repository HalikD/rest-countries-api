import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";

const HeaderEl = styled.header`
  background-color: var(--color-elem);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  box-shadow: var(--shadow);

  @media screen and (min-width: 767px) {
    padding: 2rem 3rem;
  }
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-normal);

  @media screen and (min-width: 767px) {
    font-size: var(--fs-md);
  }
`;

const Mode = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;

  @media screen and (min-width: 767px) {
    font-size: var(--fs-md);
  }
`;

const Text = styled.span`
  margin-left: 0.5rem;
`;

const Header = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Wrapper>
        <Title>Where in the world?</Title>
        <Mode onClick={toggleTheme}>
          {theme === "dark" ? <FaMoon /> : <FaSun />}
          <Text>{theme} Mode</Text>
        </Mode>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
