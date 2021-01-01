import usePositionFloatProfile from 'hooks/usePositionFloatProfile';
import React, { FC } from 'react';
import * as Styled from './styles';

interface IProps {
  nickname : string;
  username : string;
}

const UserInformation : FC<IProps> = ({ nickname , username }) => {
  const { onMouseEnter , onMouseLeave } = usePositionFloatProfile();

  return <Styled.Container>
    <Styled.UserInformationContainer
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Styled.Nickname>{nickname}</Styled.Nickname>
      <Styled.Username>@{username}</Styled.Username>
    </Styled.UserInformationContainer>
    <Styled.Point>.</Styled.Point>
    <Styled.Time>2 min</Styled.Time>
  </Styled.Container>
};

export default UserInformation;