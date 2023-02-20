import React from "react";
import styled from "styled-components";

const Wrapper = styled.select.attrs({ placeholder: "qqqq" })`
  background-color: var(--color-elem);
  width: 180px;
  color: var(--color-text);
  padding: 1rem 1.5rem;
  border-radius: 0.3rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

const Option = styled.option`
  padding: 1rem;
`;

interface SelectorProps {
  options: { label: string; value: string }[];
  setRegion: (value: string) => void;
}

const Selector = ({ options, setRegion }: SelectorProps) => {
  return (
    <Wrapper onChange={(e) => setRegion(e.target.value)}>
      {options.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Wrapper>
  );
};

export default Selector;
