import styled from "styled-components";

export const Container = styled.div({
  padding : 15,
  textAlign : 'left',
  cursor : 'pointer',
  borderBottom: '1px solid rgb(230,230,230)',
  '::last-child' : {
    borderBottom : 'none'
  }
});

export const Text = styled.span({
  fontSize : 15,
});