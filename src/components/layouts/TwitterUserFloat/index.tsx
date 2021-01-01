import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import UserProfileDesign from 'components/layouts/UserProfileDesign';
import FollowButton from './FollowButton';

import { useStore } from 'effector-react';
import current_account_selector from 'store/account/selectors/current_account_selector';

interface IProps {
  top? : number;
  left? : number;
}

const TwitterUserFloat : FC<IProps> = ({ top , left }) => {
  const current_account = useStore(current_account_selector);

  return <Styled.RootContainer top={top} left={left} >
    <ShadedContainer>
      <UserProfileDesign.Basic twitterUser={current_account}>
        <FollowButton isFollow={false} />
      </UserProfileDesign.Basic>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(TwitterUserFloat);