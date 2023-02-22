import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  transition: all 1s;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-elem);
  width: 180px;
  color: var(--color-text);
  padding: 1rem 1.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  box-shadow: var(--shadow);

  & > span {
    font-weight: var(--fw-normal);
  }
`;

const Popup = styled.div`
  position: absolute;
  background-color: var(--color-elem);
  width: 180px;
  top: 65px;
  left: 0;
  border-radius: 0.3rem;
  color: var(--color-text);
  box-shadow: var(--shadow);
  z-index: 10;
`;

const Option = styled.p`
  padding: 0.5rem 1rem;
  font-weight: var(--fw-normal);
  border-bottom: 1px solid var(--color-bg);
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

interface SelectorProps {
  options: { label: string; value: string }[];
  region: string;
  setRegion: (value: string) => void;
}

const Selector = ({ options, region, setRegion }: SelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (value: string) => {
    setRegion(value);
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Label onClick={() => setIsOpen((prev) => !prev)}>
        <span>{region ? region : "Filter by Region"}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </Label>
      {isOpen && (
        <Popup>
          {options.map((item) => (
            <Option key={item.value} onClick={() => handleClick(item.value)}>
              {item.label}
            </Option>
          ))}
        </Popup>
      )}
    </Wrapper>
  );
};

export default Selector;
