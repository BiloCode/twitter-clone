import { colors } from "config/colors";
import styled from "styled-components";

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.textLight};
  font-size: 1.1em;
`;

export const Text = styled.span`
  font-size: 13px;
  margin-left: 3px;
  color: ${colors.textLight};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${IconContainer} {
      background-color: ${colors.skyblueSmooth2};
    }

    ${Text} {
      color: ${colors.skyblue};
    }
  }
`;