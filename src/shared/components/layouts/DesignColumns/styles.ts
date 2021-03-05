import styled from "styled-components";

export const Container = styled.div({
  height: "100vh",
  display: "flex",
});

export const LeftContainer = styled.div({
  height: "100%",
  flexShrink: 1,
  flexGrow: 1,
  maxWidth: 600,
});

export const RightContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-left: 1px solid rgb(230, 230, 230);
`;

export const AsideContent = styled.div`
  width: 350px;
  height: 100%;
`;
