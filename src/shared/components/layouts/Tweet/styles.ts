import styled from "styled-components";

const paddingTop = 10;

export const TweetContainer = styled.article`
  padding: 0 15px;
  position: relative;
  cursor: pointer;

  &:not(&.hide-border) {
    border-bottom: 1px solid rgb(230, 230, 230);
  }

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;

export const Container = styled.div`
  padding-top: ${paddingTop}px;
  display: flex;
  align-items: flex-start;
  position: relative;
`;

export const ImageContainer = styled.div({
  width: 49,
  marginRight: 10,
  flexShrink: 0,
  position: "relative",
});

export const InformationContainer = styled.div({
  width: "100%",
  flexShrink: 1,
  paddingBottom: 10,
});

export const Content = styled.span`
  font-weight: 400;
  font-size: 15px;
  margin-top: 3px;
  display: inline-block;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const IndicatorComment = styled.div`
  width: 2px;
  background-color: rgb(230, 230, 230);
  position: absolute;

  &.top {
    height: ${paddingTop}px;
    top: 0;
  }
`;
