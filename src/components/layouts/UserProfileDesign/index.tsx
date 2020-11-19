import React, { FC } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';
import BackgroundImage from './BackgroundImage';

import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';

const UserProfileDesign : FC = () => {
  const Account = useRecoilValue(CurrentAccountSelector);

  return <Styled.Container>
    <BackgroundImage image={Account?.personalInformation.backgroundImage} />
    <Styled.BottomContent>
      <Styled.ButtonsContainer>
        <Styled.ProfileImageContainer>
          <UserAvatar
            image={Account?.personalInformation.profileImage}
            size={134}
            hoverable
          />
        </Styled.ProfileImageContainer>
      </Styled.ButtonsContainer>
      <Styled.ContainerPersonalInformation>
        <Styled.Nickname>{Account?.personalInformation.nickname}</Styled.Nickname>
        <Styled.Username>@{Account?.personalInformation.username}</Styled.Username>
      </Styled.ContainerPersonalInformation>
      <Styled.Description>{Account?.personalInformation.description}</Styled.Description>
    </Styled.BottomContent>
  </Styled.Container>
};

export default UserProfileDesign;