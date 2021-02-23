import React, { memo } from 'react';
import * as S from './styles';

import { useStore } from 'effector-react';
import currentAccountSelector from 'store/accounts/selectors/currentAccountSelector';

import UserInformation from '../../common/UserInformation';
import UserAvatar from 'shared/components/common/UserAvatar';
import usePositionFloatProfile from 'shared/hooks/usePositionFloatProfile';
import TweetOptions from '../TweetOptions';

const Tweet = () => {
  const { onMouseEnter , onMouseLeave } = usePositionFloatProfile();
  const current_account = useStore(currentAccountSelector);

  return <S.TweetContainer>
    <S.Container>
      <S.ImageContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        <UserAvatar
          hoverable
          size={49}
          image={current_account?.personalInformation.profileImage}
        />
      </S.ImageContainer>
      <S.InformationContainer>
        <UserInformation 
          nickname={current_account?.personalInformation.nickname!}
          username={current_account?.personalInformation.username!} 
        />
        <S.Content>
          Let's goo! ~ thanks for your support Destellos
          RT are appreciatedDestellos =w= a65462465
        </S.Content>
      </S.InformationContainer>
    </S.Container>
    <TweetOptions />
  </S.TweetContainer>
};

export default memo(Tweet);