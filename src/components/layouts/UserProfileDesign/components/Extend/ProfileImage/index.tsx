import React, { FC, memo } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';

interface IProps {
  url : string;
}

const ProfileImage : FC<IProps> = ({ url }) => (
  <Styled.Container>
    <UserAvatar
      image={url}
      size={134}
      hoverable
      borderWidth={4}
    />
  </Styled.Container>
)

export default memo(ProfileImage);