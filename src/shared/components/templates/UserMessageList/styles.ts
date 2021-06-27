import { AVATAR_SIZE } from "config/constants";
import styled from "styled-components";

export const MessagesContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 10px;
`;

export const DateContainer = styled.div`
  padding-top: 10px;
  padding-left: calc(${AVATAR_SIZE.DEFAULT} + 15px);
`;

export const MessageWithAvatar = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
  align-items: flex-end;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  &.user-auth {
    ${MessagesContainer} {
      justify-items: flex-end;
    }

    ${MessageWithAvatar} {
      grid-template-columns: 1fr;
    }

    ${DateContainer} {
      text-align: right;
      padding-left: 0;
    }
  }
`;
