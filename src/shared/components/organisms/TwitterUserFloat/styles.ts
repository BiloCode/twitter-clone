import styled, { keyframes } from "styled-components";

interface IRootContainerProps {
  top : number;
  left : number;
}

const Animation = keyframes`
  from { opacity : 0; }
  to { opacity : 1; }
`;

export const RootContainer = styled.div<IRootContainerProps>`
  position : fixed;
  top : ${({ top }) => top}px;
  left : ${({ left }) => left}px;
  z-index : 10;
  animation : ${Animation} .3s linear forwards;
`;

export const Container = styled.div({

})