import { FC } from "react";
import * as S from "./styles";

import UserAvatar from "shared/components/atoms/UserAvatar";
import UserTextInformation from "../../molecules/UserTextInformation";

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
      <UserTextInformation nickname={nickname} username={username} />
    </S.UserDataContainer>
    <S.ChildrenContainer>{children}</S.ChildrenContainer>
  </S.Container>
);

export default UserBasicData;
