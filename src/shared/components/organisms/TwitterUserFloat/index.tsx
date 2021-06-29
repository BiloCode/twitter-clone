import { FC, memo } from 'react';

import ShadedContainer from '@atoms/ShadedContainer';
import UserProfile from '@organisms/UserProfile';
import FollowButton from '@atoms/FollowButton';

import { TCoords } from '@store/float_user_profile/types';
import { TAccountState } from '@store/accounts/types';
import { SetActive } from '@store/float_user_profile';
import * as Styled from './styles';

type TwitterUserFloatProps = {
  coords: TCoords;
  user_profile: TAccountState;
};

const TwitterUserFloat: FC<TwitterUserFloatProps> = ({ coords, user_profile }) => {
  const onMouseLeave = () => SetActive(false);

  return (
    <Styled.RootContainer
      top={coords.y}
      left={coords.x}
      onMouseLeave={onMouseLeave}
    >
      <ShadedContainer>
        <UserProfile twitterUser={user_profile}>
          <FollowButton isFollow={false}>Seguir</FollowButton>
        </UserProfile>
      </ShadedContainer>
    </Styled.RootContainer>
  );
};

export default memo(TwitterUserFloat);
