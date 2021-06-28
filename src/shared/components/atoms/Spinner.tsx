import styled from "styled-components";
import { colors } from "@style-config/colors";

type TSpinnerProps = {
  size?: number;
  borderSize?: number;
};

export const Spinner = styled.div<TSpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ borderSize }) => borderSize}px solid ${colors.skyblue};
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: loopRotate 0.5s infinite linear;

  @keyframes loopRotate {
    to {
      transform: rotate(1turn);
    }
  }
`;

Spinner.defaultProps = {
  size: 48,
  borderSize: 5,
};
