import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaMoon, FaRegMoon } from "react-icons/fa";

const HeaderEl = styled.header`
  background-color: var(--color-elem);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
`;

const Title = styled(Link).attrs({ to: "/" })`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-normal);
`;

const Mode = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
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
          {theme === "dark" ? <FaMoon /> : <FaRegMoon />}
          <Text>{theme} Mode</Text>
        </Mode>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
