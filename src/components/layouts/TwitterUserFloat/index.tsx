import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import UserProfileDesign from 'components/layouts/UserProfileDesign';
import FollowButton from './FollowButton';
import { ICoords } from 'store/tweet/types';
import { IAccountState } from 'store/account/types';
import { SetActive } from 'store/tweet/userProfileFloatStore';

interface IProps {
  coords : ICoords;
  user_profile : IAccountState
}

const TwitterUserFloat : FC<IProps> = ({ coords , user_profile }) => {
  const onMouseLeave = () => SetActive(false);

  return <Styled.RootContainer
    top={coords.y} 
    left={coords.x} 
    onMouseLeave={onMouseLeave}
  >
    <ShadedContainer>
      <UserProfileDesign.Basic twitterUser={user_profile}>
        <FollowButton isFollow={false} />
      </UserProfileDesign.Basic>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(TwitterUserFloat);