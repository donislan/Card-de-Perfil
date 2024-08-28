import React from "react";
import styled from "styled-components";

const StyledPhoto = styled.img`
  height: 10rem;
  border: 2px solid rgb(34, 63, 71);
  border-radius: 50%;
  margin-top: 2rem;
  transition: 2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Photo({ img }) {
  return <StyledPhoto src={img} alt="Foto-do-Perfil"></StyledPhoto>;
}
