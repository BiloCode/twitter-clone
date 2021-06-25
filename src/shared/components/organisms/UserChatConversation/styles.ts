import styled from "styled-components";

import { WHITE_LIGHT } from "config/colors";

export const MessagesContainer = styled.div`
  padding: 1em;
  box-sizing: border-box;
`;

export const UserBasicProfile = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 10px;
  padding: 2em 1em;
  box-sizing: border-box;
  text-align: center;
  border-bottom: 1px solid ${WHITE_LIGHT};
  cursor: pointer;

  &:hover {
    background-color: ${WHITE_LIGHT};
  }
`;

export const ListMessage = styled.div`
  display: grid;
  row-gap: 10px;
  grid-auto-rows: max-content;
  padding: 1.5em 0;
  box-sizing: border-box;
`;
