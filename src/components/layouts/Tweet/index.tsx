import React, { memo } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';
import UserInformation from './UserInformation';

import { useStore } from 'effector-react';
import currentAccountSelector from 'store/account/selectors/currentAccountSelector';
import usePositionFloatProfile from 'hooks/usePositionFloatProfile';

const Tweet = () => {
  const current_account = useStore(currentAccountSelector);
  const { onMouseEnter , onMouseLeave } = usePositionFloatProfile();

  return <Styled.TweetContainer>
    <Styled.Container>
      <Styled.ImageContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        <UserAvatar
          hoverable
          size={49}
          image={current_account?.personalInformation.profileImage}
        />
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

export default memo(Tweet);