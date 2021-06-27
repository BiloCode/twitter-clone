import styled from "styled-components";
import { colors, TEXT_LIGHT, WHITE_LIGHT } from "config/colors";

const size = "38px";

export const Icon = styled.span`
  line-height: 0;
  font-size: 1.3em;
  color: ${colors.skyblue};
`;

export const Container = styled.div`
  --bg: ${colors.skyblueSmooth};

  width: ${size};
  height: ${size};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: calc(${size} / 2);
  cursor: pointer;

  &:hover {
    background-color: var(--bg);
  }

  &.light {
    &:hover {
      background-color: ${WHITE_LIGHT};
    }

    ${Icon} {
      color: ${TEXT_LIGHT};
    }
  }
`;
