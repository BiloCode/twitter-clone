import styled from "styled-components";

interface IRootContainerProps {
  top? : number;
  left? : number;
}

export const RootContainer = styled.div<IRootContainerProps>(props => ({
  position : 'absolute',
  top : props.top || 0,
  left : props.left || 0,
  zIndex : 10
}));

export const Container = styled.div({

})