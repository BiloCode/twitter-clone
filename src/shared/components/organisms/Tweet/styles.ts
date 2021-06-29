import styled from 'styled-components';

const paddingTop = '14px';

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
  padding-top: ${paddingTop};
  display: grid;
  grid-template-columns: repeat(2, auto);
  column-gap: 10px;
  position: relative;
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

export const InformationContainer = styled.div({
  width: '100%',
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

export const ImageSize = '48px';
export const Separator = '6px';
export const IndicatorComment = styled.div`
  width: 2px;
  height: calc(100% - ${paddingTop} - ${ImageSize});
  background-color: rgb(230, 230, 230);
  position: absolute;
  top: calc(${paddingTop} + ${ImageSize} + ${Separator});
  left: calc(${ImageSize} / 2);
`;
