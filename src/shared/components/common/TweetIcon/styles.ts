import styled from "styled-components";
import { colors } from "config/colors";
import { TIconColor } from ".";

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
  min-width: 16px;
  font-size: 13px;
  margin-left: 3px;
  color: ${colors.textLight};
`;

export const Container = styled.div<TIconColor>`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover,
  &.selected {
    ${Text}, ${IconContainer} {
      color: ${({ text }) => text};
    }
  }

  &:hover ${IconContainer} {
    background-color: ${({ background }) => background};
  }

  &.big {
    ${Text},${IconContainer} {
      color: #fff;
    }

    ${IconContainer} {
      width: 40px;
      height: 40px;
      font-size: 1.35em;
    }

    ${Text} {
      font-size: 14px;
    }

    &:hover {
      ${IconContainer} {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
`;

Container.defaultProps = {
  background: colors.skyblueSmooth2,
  text: colors.skyblue,
};
