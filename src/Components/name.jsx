import styled from "styled-components";

const StyledName = styled.h1`
  background-color: white;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  text-align: center;
`;

export default function Name({ name }) {
  return <StyledName>{name}</StyledName>;
}
