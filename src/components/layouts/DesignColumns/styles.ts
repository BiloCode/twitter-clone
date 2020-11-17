import styled from "styled-components";

export const Container = styled.div({
  height : '100vh',
  display : 'flex',
  overflow : 'hidden'
});

export const LeftContainer = styled.div({
  height : '100%',
  flexShrink : 1,
  flexGrow : 1,
  maxWidth : 600,
  overflow : 'hidden'
});

export const RightContainer = styled.div({
  width : 350,
  height : '100%',
  borderLeft : '1px solid rgb(230,230,230)'
});