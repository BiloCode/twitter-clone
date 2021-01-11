import React, { FC } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai'

import * as Styled from './styles';
import * as GlobalStyled from '../styles';
import HoverableIcon from 'shared/components/common/HoverableIcon';

interface IProps {
  title : string;
  subtitle? : string;
}

const Push : FC<IProps> = ({ title , subtitle }) => (
  <GlobalStyled.Container>
    <Styled.BackIconContainer>
      <HoverableIcon>
        <AiOutlineArrowLeft />
      </HoverableIcon>
    </Styled.BackIconContainer>
    <Styled.TextContainer>
      <GlobalStyled.Title>{title}</GlobalStyled.Title>
      { subtitle && <Styled.Subtitle>{subtitle}</Styled.Subtitle> }
    </Styled.TextContainer>
  </GlobalStyled.Container>
);

export default Push;