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

// Comment Indicator
type IndicatorCommentProps = {
  imageSize: number;
};

export const IndicatorComment = styled.div<IndicatorCommentProps>`
  width: 2px;
  background-color: rgb(230, 230, 230);
  position: absolute;
  left: calc(${({ imageSize }) => imageSize}px / 2);

  &.top {
    height: ${paddingTop}px;
    top: 0;
  }

  &.bottom {
    top: ${({ imageSize }) => imageSize + paddingTop}px;
    height: calc(100% - ${({ imageSize }) => imageSize + paddingTop}px);
  }
`;
