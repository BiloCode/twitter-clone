import React, { FC } from 'react';
import * as Styled from './styles';

const ShadedContainer : FC = ({ children }) => (
  <Styled.Container>
    {children}
  </Styled.Container>
);

export default ShadedContainer;