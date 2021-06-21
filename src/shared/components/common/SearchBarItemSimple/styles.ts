import { colors } from "config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 1em;
  background-color: #fff;
  border-top: 1px solid rgb(245, 245, 245);
  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const Text = styled.div`
  font-weight: bold;
  font-size: 0.95em;
  color: ${colors.textLight};
`;
