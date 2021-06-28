import { colors } from "@style-config/colors";
import styled from "styled-components";

//Date
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: flex-end;
  column-gap: 4px;
`;

export const Icon = styled.div({
  color: colors.textLight,
  lineHeight: 0,
  marginRight: 5,
});

export const Text = styled.span({
  color: colors.textLight,
  fontSize: 15,
});
