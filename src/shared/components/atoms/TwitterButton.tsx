import { FC } from "react";
import { colors } from "config/colors";

import styled from "styled-components";
import classnames from "classnames";

export const TwitterText = styled.div`
  font-weight: 800;
  font-size: 14px;
`;

export const TwitterContainer = styled.div`
  height: 40px;
  padding: 0 15px;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.skyblue};
  border-radius: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;

  ${TwitterText} {
    color: ${colors.skyblue};
  }

  &:hover {
    background-color: ${colors.skyblueSmooth};
    border-color: ${colors.skyblue};
  }

  &:active {
    background-color: ${colors.skyblueSmooth2};
  }

  &.fill {
    background-color: ${colors.skyblue};

    ${TwitterText} {
      color: #fff;
    }

    &:hover {
      background-color: ${colors.skyblueDarken};
    }
  }
`;

export type TwitterButtonProps = {
  filled?: boolean;
  onClick?(): void;
};

const TwitterButton: FC<TwitterButtonProps> = ({
  children,
  onClick,
  filled,
}) => (
  <TwitterContainer className={classnames({ fill: filled })} onClick={onClick}>
    <TwitterText>{children}</TwitterText>
  </TwitterContainer>
);

export default TwitterButton;
