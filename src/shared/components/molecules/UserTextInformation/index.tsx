import { FC, MouseEvent } from "react";
import * as S from "./styles";

import Title from "shared/components/atoms/Title";
import classNames from "classnames";
import Text from "shared/components/atoms/Text";

type TProps = {
  nickname: string;
  username: string;
  onClick?(): void;
  horizontal?: boolean;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
};

const UserTextInformation: FC<TProps> = ({
  onClick,
  nickname,
  username,
  horizontal,
  onMouseEnter,
  onMouseLeave,
}) => (
  <S.TextContainer
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={classNames({ horizontal })}
  >
    <Title type="small" onClick={onClick}>
      {nickname}
    </Title>
    <Text>@{username}</Text>
  </S.TextContainer>
);

export default UserTextInformation;
