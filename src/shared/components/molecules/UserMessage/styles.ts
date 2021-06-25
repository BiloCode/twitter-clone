import { SKYBLUE, WHITE_LIGHT } from "config/colors";
import styled from "styled-components";

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 5px;
  visibility: hidden;
`;

export const TextContainer = styled.div`
  max-width: 340px;
  padding: 12px 1.3em;
  background-color: ${WHITE_LIGHT};
  border-radius: 10px;
  text-align: left;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 5px;

  &:hover {
    ${IconsContainer} {
      visibility: visible;
    }
  }

  &.user-auth {
    ${TextContainer} {
      /* grid-column-end: 1; */
      background-color: ${SKYBLUE};
      text-align: right;

      & > span {
        color: #fff;
      }
    }

    ${IconsContainer} {
      /* grid-column-end: 0; */
    }
  }
`;
