import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  height: 20vh;
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1rem;
  color: #000000;
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 0em;
  background: #e7f6ef;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3cb571;
  font-size: 1rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #3cb571;
  }
`;

function Dropdown({ selectedOption, setSelectedOption }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    "Travel",
    "Food and Drink",
    "Transportation",
    "Entertainment",
    "Uncategorized",
  ];
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Main>
      <DropDownHeader style={{ color: "#3CB571" }} onClick={toggling}>
        {selectedOption || "Select event type"}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Main>
  );
}

export default Dropdown;
