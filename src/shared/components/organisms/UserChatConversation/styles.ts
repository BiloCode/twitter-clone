import styled from "styled-components";

import { WHITE_LIGHT } from "config/colors";
import { MESSAGE_INPUT_AREA_HEIGHT, TITLE_BAR_HEIGHT } from "config/constants";

export const MainContainer = styled.div`
  height: 100vh;

  &.floating {
    height: calc(500px - ${MESSAGE_INPUT_AREA_HEIGHT} + ${TITLE_BAR_HEIGHT});
  }
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

export const MessagesContainer = styled.div`
  height: calc(100% - ${MESSAGE_INPUT_AREA_HEIGHT} - ${TITLE_BAR_HEIGHT});
  overflow: auto;
  padding: 1em;
  box-sizing: border-box;
`;

export const MessageInputContainer = styled.div`
  width: 100%;
  height: ${MESSAGE_INPUT_AREA_HEIGHT};
  display: grid;
  grid-template-columns: max-content max-content 1fr max-content;
  align-items: center;
`;
