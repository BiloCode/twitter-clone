import styled from "styled-components";
import { colors } from "config/colors";

export const Nickname = styled.span`
  width: 130px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: bold;
`;

export const Username = styled.span`
  font-size: 15px;
  color: ${colors.textLight};
  font-weight: 400;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;

  &.isTweet {
    padding-left: 0;
    flex-direction: row;

    ${Nickname} {
      width: auto;
      overflow: initial;
      white-space: initial;
      text-overflow: initial;
      padding-right: 5px;
    }

    &:hover ${Nickname} {
      text-decoration: underline;
    }
  }
`;
