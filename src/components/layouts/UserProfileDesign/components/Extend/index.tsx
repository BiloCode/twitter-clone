import React, { FC } from 'react';
import * as Styled from './styles';

import BackgroundImage from './BackgroundImage';
import DateComponent from './DateComponent'
import FollowSection from '../../__global__/FollowSection';
import PersonalInformation from '../../__global__/PersonalInformation';
import ProfileImage from './ProfileImage';

import { IAccountState } from 'store/account/types';

interface IProps {
  twitterUser? : IAccountState;
}

const UserProfileDesign : FC<IProps> = ({ children , twitterUser }) => {
  const { 
    personalInformation : {
      nickname,
      username,
      backgroundImage,
      description,
      profileImage
    }, 
    createdAt,
    followers,
    following 
  } = twitterUser!;

  return <>
    <BackgroundImage url={backgroundImage} />
    <Styled.BottomContent>
      <Styled.ButtonsContainer>
        <ProfileImage url={profileImage} />
        {children}
      </Styled.ButtonsContainer>
      <PersonalInformation
        nickname={nickname}
        username={username}
        description={description}
      />
      <DateComponent value={createdAt} />
      <FollowSection
        followers={followers.length}
        following={following.length}
      />
    </Styled.BottomContent>
  </>
};

export default UserProfileDesign;