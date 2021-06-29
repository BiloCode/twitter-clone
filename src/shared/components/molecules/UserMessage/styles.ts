import { SKYBLUE, WHITE_LIGHT } from '@style-config/colors';
import styled from 'styled-components';

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 5px;
  visibility: hidden;
  padding: 0 10px;
`;

export const TextContainer = styled.div`
  width: 340px;
  padding: 12px 1.3em;
  background-color: ${WHITE_LIGHT};
  border-radius: 10px;
  text-align: left;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 5px;

  &:hover {
    ${IconsContainer} {
      visibility: visible;
    }
  }

  &.user-auth {
    ${TextContainer} {
      background-color: ${SKYBLUE};
      text-align: right;
      order: 2;

      & > span {
        color: #fff;
      }
    }

    ${IconsContainer} {
      order: 1;
    }
  }
`;
