import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  background: linear-gradient(45deg, #8cb2d8, rgb(34, 63, 71));
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 8rem;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, rgb(34, 63, 71), #8cb2d8);
    transform: scale(1.2);
  }

  &:not(:hover) {
    opacity: 0.8;
  }
`;

export default function Button({ href, text }) {
  return (
    <div>
      <StyledButton href={href}>{text}</StyledButton>
    </div>
  );
}
