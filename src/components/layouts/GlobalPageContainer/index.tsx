import React, { FC } from 'react';
import TwitterMenu from '../TwitterMenu';
import * as Styled from './styles';

const GlobalPageContainer : FC = ({ children }) => (
  <Styled.MainContainer>
    <Styled.MenuSection>
      <TwitterMenu />
    </Styled.MenuSection>
    <Styled.MainSection>
      {children}
    </Styled.MainSection>
  </Styled.MainContainer>
);

export default GlobalPageContainer;