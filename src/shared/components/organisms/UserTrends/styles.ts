import styled from "styled-components";

export const TitleBarContainer = styled.div`
  background-color: rgb(250, 250, 250);
  padding: 5px 12px;
  box-sizing: border-box;
`;

export const Container = styled.div`
  margin-bottom: 2em;
  background-color: rgb(250, 250, 250);

  &:not(&.page) {
    border-radius: 20px;
    overflow: hidden;
  }

  &.page {
    &,
    ${TitleBarContainer} {
      background-color: #fff;
    }
  }
`;
