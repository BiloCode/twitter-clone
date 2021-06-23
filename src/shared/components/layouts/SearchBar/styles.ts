import styled from "styled-components";

import { colors } from "config/colors";

const height = "42px";

export const MainContainer = styled.div`
  position: relative;
  padding: 8px 0;
  box-sizing: border-box;
  background-color: #fff;
`;

export const InputContainer = styled.label`
  --bg: rgb(245, 245, 245);
  --border: rgb(245, 245, 245);

  height: ${height};
  border-radius: calc(${height} / 2);
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
  border-radius: calc(${height} / 2);
`;

export const FloatContainer = styled.div`
  width: 100%;
  min-height: 200px;
  max-height: 560px;
  overflow: auto;
  background-color: #fff;
  position: absolute;
  top: calc(${height} + 10px);
  left: 0;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: grid;
  row-gap: 5px;
  background-color: rgb(245, 245, 245);
`;
