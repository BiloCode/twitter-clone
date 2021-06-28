import styled from "styled-components";
import { colors } from "@style-config/colors";

export const IconOptionSlide = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  right: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.skyblueSmooth2};
  }
`;
