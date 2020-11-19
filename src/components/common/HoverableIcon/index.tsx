import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  onClick?() : void;
}

const HoverableIcon : FC<IProps> = ({ children , onClick }) => (
  <Styled.Container onClick={onClick} >
    <Styled.Icon>
      {children}
    </Styled.Icon>
  </Styled.Container>
);

export default HoverableIcon;