import styled from "styled-components";

import { colors } from "config/colors";

export const MainContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 12px 1em;
  border-top: 1px solid rgb(245, 245, 245);
  background-color: #fff;
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const TopText = styled.div`
  font-size: 0.9em;
  padding: 0 1.6em;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 10px;
  align-items: flex-end;
`;

export const Icon = styled.span`
  line-height: 0;
  color: ${colors.textLight};
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 0.9em;
  color: ${colors.textLight};
`;
