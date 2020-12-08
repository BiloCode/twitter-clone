import React, { useState } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';
import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';
import UserInformation from './UserInformation';
import TwitterUserFloat from '../TwitterUserFloat';

const Tweet = () => {
  const Account = useRecoilValue(CurrentAccountSelector);

  const [ modal , setModal ] = useState<boolean>(false);
  
  return <Styled.TweetContainer>
    <Styled.Container>
      <Styled.ImageContainer
        onMouseEnter={() => setModal(true)}
        onMouseLeave={() => setModal(false)}
      >
        <UserAvatar
          hoverable
          size={49}
          image={Account?.personalInformation.profileImage}
        />
        { modal && <TwitterUserFloat top={60} /> }
      </Styled.ImageContainer>
      <Styled.InformationContainer>
        <UserInformation nickname={Account?.personalInformation.nickname!} username={Account?.personalInformation.username!} />
        <Styled.Content>
          Let's goo! ~ thanks for your support Destellos
          RT are appreciatedDestellos =w=
        </Styled.Content>
      </Styled.InformationContainer>
    </Styled.Container>  
  </Styled.TweetContainer>
};

export default Tweet;