import React, { FC } from 'react';
import ShadedContainer from '../ShadedContainer';
import * as S from './styles';

export type TProps = {
  top? : number | string;
  right? : number | string;
}

const ContentDropDown : FC<TProps> = ({ children , top , right }) => (
  <S.Container top={top} right={right}>
    <ShadedContainer horizontalSize="100%">
      {children}
    </ShadedContainer>
  </S.Container>
);

ContentDropDown.defaultProps = {
  top : 0,
  right : 0
}

export default ContentDropDown;