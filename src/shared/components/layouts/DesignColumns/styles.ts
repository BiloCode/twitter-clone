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

export const RightContainer = styled.div({
  width: 350,
  padding: "0 1em",
  height: "100%",
  borderLeft: "1px solid rgb(230,230,230)",
});
