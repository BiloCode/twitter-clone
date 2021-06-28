import { FC } from "react";
import * as Styled from "./styles";

import UserAllNames from "../UserAllNames";
import usePositionFloatProfile from "@hooks/usePositionFloatProfile";

interface IProps {
  nickname: string;
  username: string;
}

const TweetUserInformation: FC<IProps> = ({ nickname, username }) => {
  const { onMouseEnter, onMouseLeave } = usePositionFloatProfile();

  const navigateToProfile = () => null;

  return (
    <Styled.Container>
      <UserAllNames
        horizontal
        username={username}
        nickname={nickname}
        onClick={navigateToProfile}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Styled.Point>.</Styled.Point>
      <Styled.Time>2 min</Styled.Time>
    </Styled.Container>
  );
};

export default TweetUserInformation;
