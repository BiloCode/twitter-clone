import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  link : string;
  text : string;
  isSelect? : boolean;
}

const SelectableOption : FC<IProps> = ({ children, link , text }) => (
  <Styled.MainContainer href={link} >
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