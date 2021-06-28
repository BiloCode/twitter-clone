import { colors } from "@style-config/colors";
import styled from "styled-components";

export const MainContainer = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  padding: 1em;
  background-color: #fff;
  border-top: 1px solid rgb(245, 245, 245);
  display: grid;
  row-gap: 4px;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 0.9em;
  color: ${colors.textLight};

  &.light {
    font-weight: 300;
  }
`;
