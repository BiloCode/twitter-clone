import { FC } from "react";
import * as Styled from "./styles";

import UserTextInformation from "../UserTextInformation";
import usePositionFloatProfile from "shared/hooks/usePositionFloatProfile";

interface IProps {
  nickname: string;
  username: string;
}

const TweetUserInformation: FC<IProps> = ({ nickname, username }) => {
  const { onMouseEnter, onMouseLeave } = usePositionFloatProfile();

  return (
    <Styled.Container>
      <UserTextInformation
        isTweet
        username={username}
        nickname={nickname}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Styled.Point>.</Styled.Point>
      <Styled.Time>2 min</Styled.Time>
    </Styled.Container>
  );
};

export default TweetUserInformation;
