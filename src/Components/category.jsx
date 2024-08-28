import React from "react";
import styled from "styled-components";

const StyledText = styled.p`
  background-color: white;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgb(34, 63, 71);
  width: 100%;
  padding: 1rem 0 1rem 0;
`;

export default function Text({ text }) {
  return <StyledText>{text}</StyledText>;
}
