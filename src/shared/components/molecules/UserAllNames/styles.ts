import styled from "styled-components";
import { colors } from "@style-config/colors";

export const TextContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;

  &.horizontal {
    grid-template-columns: repeat(2, max-content);
    column-gap: 5px;
  }
`;

export const Username = styled.span`
  font-size: 15px;
  color: ${colors.textLight};
  font-weight: 400;
`;
