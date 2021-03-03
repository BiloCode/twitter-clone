import { FC, MouseEvent } from "react";
import classnames from "classnames";
import * as S from "./styles";

type TProps = {
  nickname: string;
  username: string;
  isTweet?: boolean;
  onMouseEnter?(event: MouseEvent): void;
  onMouseLeave?(event: MouseEvent): void;
};

const UserTextInformation: FC<TProps> = ({
  nickname,
  username,
  isTweet,
  onMouseEnter,
  onMouseLeave,
}) => (
  <S.TextContainer
    className={classnames({ isTweet })}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <S.Nickname>{nickname}</S.Nickname>
    <S.Username>@{username}</S.Username>
  </S.TextContainer>
);

export default UserTextInformation;
