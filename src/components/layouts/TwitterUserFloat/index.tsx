import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import UserProfileDesign from 'components/layouts/UserProfileDesign';

import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';
import FollowButton from './FollowButton';

interface IProps {
  top? : number;
  left? : number;
}

const TwitterUserFloat : FC<IProps> = ({ top , left }) => {
  const Account = useRecoilValue(CurrentAccountSelector);

  return <Styled.RootContainer top={top} left={left} >
    <ShadedContainer>
      <UserProfileDesign.Basic twitterUser={Account}>
        <FollowButton isFollow={false} />
      </UserProfileDesign.Basic>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(TwitterUserFloat);