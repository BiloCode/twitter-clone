import { FC, MouseEvent } from "react";
import * as S from "./styles";

import Title from "@atoms/Title";
import classNames from "classnames";
import Text from "@atoms/Text";
import TextLimiter from "@application/utils/TextLimiter";

type TProps = {
  nickname: string;
  username: string;
  onClick?(): void;
  horizontal?: boolean;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
};

const UserAllNames: FC<TProps> = ({
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
      {TextLimiter.exec(nickname)}
    </Title>
    <Text>@{username}</Text>
  </S.TextContainer>
);

export default UserAllNames;
