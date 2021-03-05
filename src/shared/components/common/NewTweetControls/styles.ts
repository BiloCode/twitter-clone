import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 12px 15px;
`;

export const RightContent = styled.div`
  flex-grow: 1;
`;

export const DivContainer = styled.div`
  margin: 12px 0;
`;

export const Input = styled.input`
  font-size: 16px;
  color: ${colors.textLight};
`;

export const ActionsContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
