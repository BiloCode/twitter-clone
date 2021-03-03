import React, { FC, memo } from 'react';
import * as Styled from './styles';

interface IProps {
  isModal? : boolean;
  nickname : string;
  username : string;
  description : string;
}

const PersonalInformation : FC<IProps> = ({ isModal , nickname , username , description }) => (
  <Styled.Container>
    <Styled.ContainerUserText isModal={isModal} >
      <Styled.Nickname>{nickname}</Styled.Nickname>
      <Styled.Username>@{username}</Styled.Username>
    </Styled.ContainerUserText>
    <Styled.Description>{description}</Styled.Description>
  </Styled.Container>
);

export default memo(PersonalInformation);