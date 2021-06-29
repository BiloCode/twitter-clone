import { FC, memo } from 'react';

import Text from '@atoms/Text';
import Title from '@atoms/Title';
import * as S from './styles';

interface IProps {
  following: number;
  followers: number;
}

const UserFollowSection: FC<IProps> = ({ followers, following }) => (
  <S.Container>
    <S.ContainerText>
      <Title type="small">{following}</Title>
      <Text>Following</Text>
    </S.ContainerText>
    <S.ContainerText>
      <Title type="small">{followers}</Title>
      <Text>Followers</Text>
    </S.ContainerText>
  </S.Container>
);

export default memo(UserFollowSection);
