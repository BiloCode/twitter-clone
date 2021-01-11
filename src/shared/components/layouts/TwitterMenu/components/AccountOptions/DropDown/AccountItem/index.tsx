import React, { FC } from 'react';
import { BsCheck } from 'react-icons/bs';

import * as Styled from './styles';

import UserBasicData from 'shared/components/common/UserBasicData';

interface IProps {
  isAuthenticated? : boolean;
  notifications? : number;
  user : {
    image : string;
    username : string;
    nickname : string;
  };
  onClick?() : void;
}

const AccountItem : FC<IProps> = ({ isAuthenticated , notifications , user , onClick }) => (
  <Styled.Container>
    <UserBasicData
      image={user.image}
      nickname={user.nickname}
      username={user.username}
      imageSize={50}
      onClick={onClick}
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