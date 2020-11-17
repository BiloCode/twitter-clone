import React from 'react';
import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';
import * as Styled from './styles';
import UserAvatar from 'components/common/UserAvatar';
import BackgroundImage from './BackgroundImage';

const UserProfileDesign = () => {
  const Account = useRecoilValue(CurrentAccountSelector);

  return <Styled.Container>
    <BackgroundImage image={Account?.personalInformation.backgroundImage} />
    <Styled.BottomContent>
      <Styled.ButtonsContainer>
        <Styled.ProfileImageContainer size={134} >
          <UserAvatar
            image={Account?.personalInformation.profileImage}
            size={134}
            hoverable
          />
        </Styled.ProfileImageContainer>
      </Styled.ButtonsContainer>
    </Styled.BottomContent>
  </Styled.Container>
};

export default UserProfileDesign;