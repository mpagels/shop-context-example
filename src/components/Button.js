import React from "react";
import styled from "styled-components";

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;

const StyledButton = styled.button`
  color: #000;
  background: linear-gradient(180deg, #ffbb3b, #ffa90a);
  font-size: 0.8em;
  padding: 0.8em 2em;
  border: none;
  border-radius: 0.4em;
  text-transform: uppercase;
`;
