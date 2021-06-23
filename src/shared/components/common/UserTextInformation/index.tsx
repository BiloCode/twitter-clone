import { FC, MouseEvent } from "react";
import * as S from "./styles";

import Title from "shared/components/atoms/Title";
import classNames from "classnames";

type TProps = {
  nickname: string;
  username: string;
  onClick?(): void;
  vertical?: boolean;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
};

const UserTextInformation: FC<TProps> = ({
  onClick,
  nickname,
  username,
  vertical,
  onMouseEnter,
  onMouseLeave,
}) => (
  <S.TextContainer
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={classNames({ vertical })}
  >
    <Title type="small" onClick={onClick}>
      {nickname}
    </Title>
    <S.Username>@{username}</S.Username>
  </S.TextContainer>
);

export default UserTextInformation;
