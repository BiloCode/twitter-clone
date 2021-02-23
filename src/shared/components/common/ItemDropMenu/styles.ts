import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20px 1fr;
  align-items: center;
  column-gap: 15px;
  padding: 15px;
  cursor: pointer;
`;

export const Icon = styled.span`
  color: ${colors.textLight};
`;

export const Text = styled.span`

`;