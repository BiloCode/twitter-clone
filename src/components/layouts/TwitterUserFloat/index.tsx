import React, { memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import UserProfileDesign from 'components/layouts/UserProfileDesign';

import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';
import FollowButton from './FollowButton';

const TwitterUserFloat = () => {
  const Account = useRecoilValue(CurrentAccountSelector);

  return <Styled.RootContainer>
    <ShadedContainer>
      <UserProfileDesign.Basic twitterUser={Account}>
        <FollowButton isFollow={false} />
      </UserProfileDesign.Basic>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(TwitterUserFloat);