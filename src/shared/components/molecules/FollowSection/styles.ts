import styled from "styled-components";

export const ContainerText = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 1em;
`;
