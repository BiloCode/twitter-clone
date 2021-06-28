import { colors } from "@style-config/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 12px 15px;
`;

export const RightContent = styled.div`
  flex-grow: 1;
`;

export const InputContainer = styled.div`
  margin: 12px 0;
`;

export const Input = styled.input`
  font-size: 17px;
  padding: 0 6px;

  &,
  &::placeholder {
    color: ${colors.textLight};
  }
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

export const TweetActions = styled.div`
  display: grid;
  grid-template-columns: 48px 48px 1fr;
  justify-items: center;
  align-items: center;

  &.empty-input {
    grid-template-columns: 1fr;
  }
`;

export const TweetTextLimitContainer = styled.span`
  width: 100%;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TweetTextLimitIndicator = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 16px;
  border: 2px solid rgb(230, 230, 230);
  border-right-color: ${colors.skyblue};
`;
