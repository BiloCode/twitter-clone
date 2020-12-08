import React, { FC } from 'react';
import { BsCheck } from 'react-icons/bs';

import * as Styled from './styles';

import UserBasicData from 'components/common/UserBasicData';

interface IProps {
  isAuthenticated? : boolean;
  notifications? : number;
  user : {
    image : string;
    username : string;
    nickname : string;
  }
}

const AccountItem : FC<IProps> = ({ isAuthenticated , notifications , user }) => (
  <Styled.Container>
    <UserBasicData
      image={user.image}
      nickname={user.nickname}
      username={user.username}
      imageSize={50}
    >
      {
        isAuthenticated ? (
          <Styled.AuthenticatedAccountContainer>
            <BsCheck />
          </Styled.AuthenticatedAccountContainer>
        ) : notifications ? (
          <Styled.NotificationsContainer>
            <Styled.NotificationsText>{notifications}</Styled.NotificationsText>
          </Styled.NotificationsContainer>
        ) : null
      }
    </UserBasicData>
  </Styled.Container>
);

export default AccountItem;