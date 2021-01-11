import React, { FC } from 'react';
import * as Styled from './styles';

import UserAvatar from 'shared/components/common/UserAvatar';
import useTextLimit from 'shared/hooks/useTextLimit';

interface IProps {
  image : string;
  username : string;
  nickname : string;
  imageSize? : number;
  onClick?() : void;
}

const UserBasicData : FC<IProps> = ({ children , image , imageSize , username , nickname , onClick }) => {
  const TextLimit = useTextLimit();
  
  return <Styled.Container onClick={onClick} >
    <Styled.UserDataContainer>
      <UserAvatar size={imageSize || 40} image={image} />
      <Styled.TextContainer>
        <Styled.Nickname>{TextLimit(nickname)}</Styled.Nickname>
        <Styled.Username>@{username}</Styled.Username>
      </Styled.TextContainer>
    </Styled.UserDataContainer>
    <Styled.ChildrenContainer>
      {children}
    </Styled.ChildrenContainer>
  </Styled.Container>
}

export default UserBasicData;