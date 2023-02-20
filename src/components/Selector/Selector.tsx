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
  setSelect: (value: string) => void;
}

const Selector = ({ options, setSelect }: SelectorProps) => {
  return (
    <Wrapper onChange={(e) => setSelect(e.target.value)}>
      <option value="" disabled>
        Filter by Region
      </option>
      {options.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Wrapper>
  );
};

export default Selector;
