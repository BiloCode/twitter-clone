import styled from "styled-components";

import { colors } from "@style-config/colors";
import { INPUT_SEARCH_HEIGHT } from "@style-config/constants";

export const Icon = styled.span`
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: ${colors.textLight};
  background-color: var(--bg);
  font-size: 15px;
  border-radius: calc(${INPUT_SEARCH_HEIGHT} / 2);
`;

export const InputContainer = styled.label`
  --bg: rgb(245, 245, 245);
  --border: rgb(245, 245, 245);

  height: ${INPUT_SEARCH_HEIGHT};
  border-radius: calc(${INPUT_SEARCH_HEIGHT} / 2);
  display: flex;
  cursor: text;
  background-color: var(--bg);
  border: 1px solid var(--border);

  &.active {
    --bg: #fff;
    --border: ${colors.skyblue};
  }

  &.right {
    ${Icon} {
      order: 2;
    }

    ${Input} {
      order: 1;
      padding-left: 1.5em;
    }
  }
`;
