import { FC } from 'react';
import UserAvatar from '@atoms/UserAvatar';
import * as S from './styles';

import UserAllNames from '../../molecules/UserAllNames';

interface IProps {
  image: string;
  username: string;
  nickname: string;
  onClick?(): void;
}

const UserBasicData: FC<IProps> = ({
  children,
  image,
  username,
  nickname,
  onClick,
}) => (
  <S.Container onClick={onClick}>
    <S.UserDataContainer>
      <UserAvatar image={image} />
      <UserAllNames nickname={nickname} username={username} />
    </S.UserDataContainer>
    <S.ChildrenContainer>{children}</S.ChildrenContainer>
  </S.Container>
);

export default UserBasicData;
