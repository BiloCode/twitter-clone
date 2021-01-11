import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  text : string;
  onClick?() : void;
}

const Item : FC<IProps> = ({ text , onClick }) => (
  <Styled.Container onClick={onClick} >
    <Styled.Text>{text}</Styled.Text>
  </Styled.Container>
);

export default Item;