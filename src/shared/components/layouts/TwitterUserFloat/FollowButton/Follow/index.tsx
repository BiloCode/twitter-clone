import React, { FC } from 'react';
import * as GlobalStyled from '../styles';

interface IProps {
  onClick?() : void;
}

const Follow : FC<IProps> = ({ onClick }) => (
  <GlobalStyled.Container onClick={onClick} >
    <GlobalStyled.Title>Follow</GlobalStyled.Title>
  </GlobalStyled.Container>
);

export default Follow;