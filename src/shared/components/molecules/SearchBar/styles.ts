import styled from "styled-components";

import { colors } from "config/colors";
import { INPUT_SEARCH_HEIGHT } from "config/constants";

export const InputContainer = styled.label`
  --bg: rgb(245, 245, 245);
  --border: rgb(245, 245, 245);

  height: ${INPUT_SEARCH_HEIGHT};
  border-radius: calc(${INPUT_SEARCH_HEIGHT} / 2);
  display: grid;
  cursor: text;
  grid-template-columns: 64px 1fr;
  background-color: var(--bg);
  border: 1px solid var(--border);

  &.active {
    --bg: #fff;
    --border: ${colors.skyblue};
  }
`;

export const Icon = styled.span`
  width: 100%;
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
