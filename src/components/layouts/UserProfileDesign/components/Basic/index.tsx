import React, { FC } from 'react';
import * as Styled from './styles';

import { IAccountState } from 'atoms/AccountState/types';

import CommonFollowers from './CommonFollowers';
import UserAvatar from 'components/common/UserAvatar';
import FollowSection from '../../__global__/FollowSection';
import PersonalInformation from '../../__global__/PersonalInformation';

interface IProps {
  twitterUser? : IAccountState;
}

const Basic : FC<IProps> = ({ children , twitterUser }) => {
  const { 
    personalInformation : {
      nickname,
      username,
      description,
      profileImage
    },
    followers,
    following 
  } = twitterUser!;

  return <>
    <Styled.BottomContent>
      <Styled.ButtonsContainer>
        <UserAvatar hoverable size={59} image={profileImage} />
        {children}
      </Styled.ButtonsContainer>
      <PersonalInformation
        isModal
        nickname={nickname}
        username={username}
        description={description}
      />
      <FollowSection
        followers={followers.length}
        following={following.length}
      />
      <CommonFollowers />
    </Styled.BottomContent>
  </>
}

export default Basic;