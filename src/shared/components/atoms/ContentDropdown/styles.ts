import styled from 'styled-components';
import { TProps } from '.';

export const Container = styled.div<TProps>`
  min-width: 250px;
  max-width: 300px;
  position: absolute;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  z-index: 1;
`;
