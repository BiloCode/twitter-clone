import styled from "styled-components";

import { SKYBLUE, WHITE_LIGHT } from "@style-config/colors";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  column-gap: 10px;
  align-items: center;
  padding: 1em 1.3em;
  border-right: 3px solid transparent;
  border-bottom: 1px solid ${WHITE_LIGHT};
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${WHITE_LIGHT};
  }

  &.select {
    border-right-color: ${SKYBLUE};
  }
`;

export const TextContainer = styled.div`
  display: grid;
  row-gap: 5px;
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
