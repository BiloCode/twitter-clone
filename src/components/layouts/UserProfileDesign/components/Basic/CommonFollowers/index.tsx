import React, { memo } from 'react';
import * as Styled from './styles';

import UserAvatar from 'components/common/UserAvatar';

const CommonFollowers = () => (
  <Styled.Container>
    <Styled.ImagesContainer>
      <Styled.ImageProfile>
        <UserAvatar size={20} />
      </Styled.ImageProfile>
      <Styled.ImageProfile>
        <UserAvatar size={20} />
      </Styled.ImageProfile>
      <Styled.ImageProfile>
        <UserAvatar size={20} />
      </Styled.ImageProfile>
    </Styled.ImagesContainer>
    <Styled.TextContainer>
      carlosnoob, WithSack y 3 mas de las cuentas
      que sigues siguen a este usuario.
    </Styled.TextContainer>
  </Styled.Container>
);

export default memo(CommonFollowers);