import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  row-gap: 10px;
  padding: 40px 20px 40px 20px;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 19px;
`;

export const Subtitle = styled.span`
  font-weight: 300;
  font-size: 15px;
  color: ${colors.textLight};
`;
