import React from 'react';
import { GiStarsStack } from 'react-icons/gi'
import * as Styled from './styles';

const StatusBar = () => (
  <Styled.Container>
    <Styled.Title>Inicio</Styled.Title>
    <Styled.IconContainer>
      <Styled.Icon>
        <GiStarsStack />
      </Styled.Icon>
    </Styled.IconContainer>
  </Styled.Container>
);

export default StatusBar;