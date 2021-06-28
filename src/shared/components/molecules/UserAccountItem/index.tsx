import React, { FC, memo } from "react";
import * as Styled from "./styles";
import { BsCheck } from "react-icons/bs";

import UserBasicData from "@templates/UserBasicData";

interface IProps {
  onClick?(): void;
  notifications?: number;
  isAuthenticated?: boolean;
  user: {
    image: string;
    username: string;
    nickname: string;
  };
}

const UserAccountItem: FC<IProps> = ({
  isAuthenticated,
  notifications,
  user,
  onClick,
}) => (
  <Styled.Container>
    <UserBasicData
      image={user.image}
      nickname={user.nickname}
      username={user.username}
      onClick={onClick}
    >
      {isAuthenticated ? (
        <Styled.AuthenticatedAccountContainer>
          <BsCheck />
        </Styled.AuthenticatedAccountContainer>
      ) : notifications ? (
        <Styled.NotificationsContainer>
          <Styled.NotificationsText>{notifications}</Styled.NotificationsText>
        </Styled.NotificationsContainer>
      ) : null}
    </UserBasicData>
  </Styled.Container>
);

export default memo(UserAccountItem);
