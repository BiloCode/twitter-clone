import React, { FC } from "react";
import * as S from "./styles";

import UserAvatar from "shared/components/common/UserAvatar";
import UserTextInformation from "../UserTextInformation";

interface IProps {
  image: string;
  username: string;
  nickname: string;
  imageSize?: number;
  onClick?(): void;
}

const UserBasicData: FC<IProps> = ({
  children,
  image,
  imageSize,
  username,
  nickname,
  onClick,
}) => (
  <S.Container onClick={onClick}>
    <S.UserDataContainer>
      <UserAvatar size={imageSize || 40} image={image} />
      <UserTextInformation nickname={nickname} username={username} />
    </S.UserDataContainer>
    <S.ChildrenContainer>{children}</S.ChildrenContainer>
  </S.Container>
);

export default UserBasicData;
