import TwitterUserFloat from 'components/layouts/TwitterUserFloat';
import React, { FC, useState } from 'react';
import * as Styled from './styles';

interface IProps {
  nickname : string;
  username : string;
}

const UserInformation : FC<IProps> = ({ nickname , username }) => {
  const [ modal , setModal ] = useState<boolean>(false);
  
  return <Styled.Container>
    <Styled.UserInformationContainer
      onMouseEnter={() => setModal(true)}
      onMouseLeave={() => setModal(false)}
    >
      <Styled.Nickname>{nickname}</Styled.Nickname>
      <Styled.Username>@{username}</Styled.Username>
      { modal && <TwitterUserFloat top={20} /> }
    </Styled.UserInformationContainer>
    <Styled.Point>.</Styled.Point>
    <Styled.Time>2 min</Styled.Time>
  </Styled.Container>
};

export default UserInformation;