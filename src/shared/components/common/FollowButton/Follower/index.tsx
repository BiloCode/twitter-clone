import { FC } from "react";

import * as S from "./styles";

interface IProps {
  onClick?(): void;
}

const Follower: FC<IProps> = ({ onClick }) => (
  <S.FollowerButton onClick={onClick}>
    <S.FollowerTitle>Following</S.FollowerTitle>
  </S.FollowerButton>
);

export default Follower;
