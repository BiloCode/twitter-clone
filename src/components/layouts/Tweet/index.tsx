import React, { useState } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';
import UserInformation from './UserInformation';
import TwitterUserFloat from '../TwitterUserFloat';

import { useStore } from 'effector-react';
import current_account_selector from 'store/account/selectors/current_account_selector';

const Tweet = () => {
  const current_account = useStore(current_account_selector);

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
          image={current_account?.personalInformation.profileImage}
        />
        { modal && <TwitterUserFloat top={60} /> }
      </Styled.ImageContainer>
      <Styled.InformationContainer>
        <UserInformation 
          nickname={current_account?.personalInformation.nickname!}
          username={current_account?.personalInformation.username!} 
        />
        <Styled.Content>
          Let's goo! ~ thanks for your support Destellos
          RT are appreciatedDestellos =w=
        </Styled.Content>
      </Styled.InformationContainer>
    </Styled.Container>  
  </Styled.TweetContainer>
};

export default Tweet;