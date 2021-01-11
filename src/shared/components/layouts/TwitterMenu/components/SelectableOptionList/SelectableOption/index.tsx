import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  text? : string;
  isSelect? : boolean;
  onClick?() : void;
}

const SelectableOption : FC<IProps> = ({ children , text , onClick , isSelect }) => (
  <Styled.MainContainer onClick={onClick} isSelect={isSelect} >
    <Styled.ItemContainer>
      <Styled.IconContainer>
        {children}
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

export default SelectableOption;