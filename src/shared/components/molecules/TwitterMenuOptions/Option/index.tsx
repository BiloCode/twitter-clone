import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
  text? : string;
  content : JSX.Element;
  isSelect? : boolean;
  onClick?() : void;
}

const Option : FC<IProps> = ({ text , onClick , isSelect , content }) => (
  <Styled.MainContainer onClick={onClick} isSelect={isSelect} >
    <Styled.ItemContainer>
      <Styled.IconContainer>
        {content}
      </Styled.IconContainer>
      {
        text && (
          <Styled.TextContainer>
            <Styled.Text>{text}</Styled.Text>
          </Styled.TextContainer> 
        )
      }
    </Styled.ItemContainer>
  </Styled.MainContainer>
);

export default memo(Option, (prev, next) => prev.isSelect === next.isSelect);