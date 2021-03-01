import styled from "styled-components";

export const MainContainer = styled.div({
  minWidth: 976,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

export const MenuSection = styled.header({
  flexGrow: 1,
  height: "100vh",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  padding: "0 10px",
  borderRight: "1px solid rgb(230,230,230)",
});

export const MainSection = styled.main`
  height: 100vh;
  overflow-y: auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RootSectionContainer = styled.div({
  width: 990,
});
