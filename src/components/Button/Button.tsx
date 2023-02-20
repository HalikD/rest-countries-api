import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-elem);
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  outline: none;
  border: none;
  border-radius: 0.3rem;
  box-shadow: var(--shadow);
  padding: 0.7rem 1.2rem;
  cursor: pointer;
`;

export default Button;
