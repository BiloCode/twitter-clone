import { colors } from "config/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px 1em;
  display: flex;
  border-bottom: 1px solid rgb(235, 235, 235);
  cursor: pointer;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const IconContainer = styled.div`
  width: 48px;
  display: flex;
  justify-content: flex-end;
  flex: none;
  margin-right: 12px;
  line-height: 0;
  padding-top: 2px;
`;

export const NotificationContent = styled.div`
  display: grid;
  row-gap: 8px;
  flex-shrink: none;
`;

export const UserAvatars = styled.div`
  height: 32px;
  display: flex;
`;

export const NotificationText = styled.div`
  display: grid;
  row-gap: 6px;
`;

export const Title = styled.span`
  font-size: 15px;

  span {
    font-weight: bold;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: ${colors.textLight};
`;
