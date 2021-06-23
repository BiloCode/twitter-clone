import styled from "styled-components";
import { colors } from "config/colors";

export const TextContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5px;

  &.vertical {
    grid-template-columns: max-content;
    column-gap: 0;
    row-gap: 5px;
  }
`;

export const Username = styled.span`
  font-size: 15px;
  color: ${colors.textLight};
  font-weight: 400;
`;
