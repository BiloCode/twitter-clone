import styled from "styled-components";

interface IContainerProps {
  spaceBetween? : boolean;
}

export const Container = styled.div<IContainerProps>(props => ({
  width : '100%',
  height : 53,
  padding : '0 15px',
  display : 'flex',
  justifyContent : props.spaceBetween ? 'space-between' : 'flex-start',
  alignItems : 'center',
  borderBottom : '1px solid rgb(230,230,230)',
  userSelect : 'none'
}));

export const Title = styled.span({
  fontSize : 19,
  fontWeight : 800
});