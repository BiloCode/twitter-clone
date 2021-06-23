import { FC, memo } from "react";
import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import Title from "shared/components/atoms/Title";

interface IProps {
  following: number;
  followers: number;
}

const FollowSection: FC<IProps> = ({ followers, following }) => (
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

export default memo(FollowSection);
