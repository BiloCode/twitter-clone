import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import * as Styled from './styles';

import TwitterMenu from '../TwitterMenu';

const RootLayout : FC<RouteComponentProps> = ({ children }) => (
  <Styled.MainContainer>
    <Styled.MenuSection>
      <TwitterMenu />
    </Styled.MenuSection>
    <Styled.MainSection>
      <Styled.RootSectionContainer>
        {children}
      </Styled.RootSectionContainer>
    </Styled.MainSection>
  </Styled.MainContainer>
);

export default RootLayout;