import React, { memo } from "react";
import * as S from "./styles";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";

import TweetUserInformation from "shared/components/common/TweetUserInformation";
import UserAvatar from "shared/components/common/UserAvatar";
import usePositionFloatProfile from "shared/hooks/usePositionFloatProfile";
import TweetOptions from "../TweetOptions";
import TweetImage from "shared/components/common/TweetImage";
import TweetReactions from "../TweetReactions";
import { TweetImageContainer } from "shared/components/common/TweetImageContainer";

const Tweet = () => {
  const current_account = useStore(currentAccountSelector);
  const { onMouseEnter, onMouseLeave } = usePositionFloatProfile();

  return (
    <S.TweetContainer>
      <S.Container>
        <TweetImageContainer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <UserAvatar
            hoverable
            size={49}
            image={current_account?.personalInformation.profileImage}
          />
        </TweetImageContainer>
        <S.InformationContainer>
          <TweetUserInformation
            nickname={current_account?.personalInformation.nickname!}
            username={current_account?.personalInformation.username!}
          />
          <S.Content>
            Let's goo! ~ thanks for your support Destellos RT are
            appreciatedDestellos =w= a65462465
          </S.Content>
          <TweetImage />
          <TweetReactions />
        </S.InformationContainer>
      </S.Container>
      <TweetOptions />
    </S.TweetContainer>
  );
};

export default memo(Tweet);
