import styled from "styled-components";

export const Container = styled.div({
  width : 300,
  backgroundColor : '#fff',
  boxShadow : '3px 3px 8px rgb(230,230,230) , -3px -3px 8px rgb(230,230,230)',
  position:  'absolute',
  left : 0,
  right : 0,
  transform: 'translateY(calc(-100% - 70px))',
  borderRadius : 15
});