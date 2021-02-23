import React, { FC } from 'react';
import * as Styled from './styles';

export type TProps = {
  horizontalSize? : number | string;
}

const ShadedContainer : FC<TProps> = ({ children , horizontalSize }) => (
  <Styled.Container horizontalSize={horizontalSize}>
    {children}
  </Styled.Container>
);

ShadedContainer.defaultProps = {
  horizontalSize : 300
}

export default ShadedContainer;