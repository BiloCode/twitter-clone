import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: flex-end;
  column-gap: 10px;
`;

export const MessagesContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  row-gap: 10px;

  &.right-align {
    justify-items: flex-end;
  }
`;

export const DateContainer = styled.div`
  padding-top: 10px;
  padding-left: 5px;
`;
