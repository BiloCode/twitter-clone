import React, { FC } from 'react';

import * as GlobalStyled from '../styles';
import * as Styled from './styles';

import { NSUserInformation } from '../types';

import UserAvatar from 'components/common/UserAvatar';
import useTextLimit from 'hooks/useTextLimit';

const Basic : FC<NSUserInformation.IBasic> = ({ children , image , imageSize , username , nickname , onClick }) => {
  const TextLimit = useTextLimit();
  
  return <GlobalStyled.Container onClick={onClick} >
    <Styled.UserDataContainer>
      <UserAvatar size={imageSize || 40} image={image} />
      <Styled.TextContainer>
        <GlobalStyled.Nickname>{TextLimit(nickname)}</GlobalStyled.Nickname>
        <GlobalStyled.Username>@{username}</GlobalStyled.Username>
      </Styled.TextContainer>
    </Styled.UserDataContainer>
    <Styled.ChildrenContainer>
      {children}
    </Styled.ChildrenContainer>
  </GlobalStyled.Container>
}

export default Basic;