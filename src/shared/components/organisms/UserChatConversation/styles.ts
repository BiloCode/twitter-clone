import styled from "styled-components";

import { WHITE_LIGHT } from "config/colors";
import { MESSAGE_INPUT_AREA_HEIGHT, TITLE_BAR_HEIGHT } from "config/constants";

export const MainContainer = styled.div`
  height: 100vh;
`;

export const MessageArea = styled.div`
  height: calc(100% - ${MESSAGE_INPUT_AREA_HEIGHT});
`;

export const MessagesContainer = styled.div`
  height: calc(100% - ${TITLE_BAR_HEIGHT});
  overflow: auto;
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

export const MessageInputContainer = styled.div`
  height: ${MESSAGE_INPUT_AREA_HEIGHT};
  display: flex;
  align-items: center;
`;

export const UserActionsContainer = styled.div`
  display: flex;
`;
