import { FC, memo } from "react";
import faker from "faker";
import classnames from "classnames";
import * as S from "./styles";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";
import usePositionFloatProfile from "shared/hooks/usePositionFloatProfile";

import UserAvatar from "shared/components/atoms/UserAvatar";
import TweetImage from "shared/components/molecules/TweetImage";
import TweetOptions from "shared/components/molecules/TweetOptions";
import TweetReactions from "shared/components/molecules/TweetReactions";
import TweetUserInformation from "shared/components/molecules/TweetUserInformation";

export type TweetProps = {
  image?: string;
  retweet?: boolean;
};

const Tweet: FC<TweetProps> = ({ image, retweet }) => {
  const { onMouseEnter, onMouseLeave } = usePositionFloatProfile();
  const current_account = useStore(currentAccountSelector);

  return (
    <S.TweetContainer className={classnames({ "hide-border": retweet })}>
      <S.Container>
        <S.ImageContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <UserAvatar
            hoverable
            image={current_account?.personalInformation.profileImage}
          />
        </S.ImageContainer>
        <S.InformationContainer>
          <TweetUserInformation
            nickname={current_account?.personalInformation.nickname!}
            username={current_account?.personalInformation.username!}
          />
          <S.Content>{faker.lorem.words(45)}</S.Content>
          {image && <TweetImage src={image} />}
          <TweetReactions />
        </S.InformationContainer>
        {retweet && <S.IndicatorComment />}
      </S.Container>
      <TweetOptions />
    </S.TweetContainer>
  );
};

export default memo(Tweet);
