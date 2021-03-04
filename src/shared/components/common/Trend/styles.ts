import styled from "styled-components";
import { colors } from "config/colors";

export const PrevTitle = styled.span``;

export const Title = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export const TweetsNumber = styled.span``;

export const AbsoluteContainer = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 4px;
  padding: 1em 1.5em;
  border-bottom: 1px solid rgb(230, 230, 230);
  position: relative;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }

  ${PrevTitle}, ${TweetsNumber} {
    font-size: 13px;
    color: ${colors.textLight};
  }
`;
