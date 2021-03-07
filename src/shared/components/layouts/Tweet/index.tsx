import { FC, memo } from "react";
import faker from "faker";
import classnames from "classnames";
import * as S from "./styles";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";
import usePositionFloatProfile from "shared/hooks/usePositionFloatProfile";

import { TweetImageContainer } from "shared/components/common/TweetImageContainer";

import TweetOptions from "../TweetOptions";
import TweetReactions from "../TweetReactions";
import TweetImage from "shared/components/common/TweetImage";
import UserAvatar from "shared/components/common/UserAvatar";
import TweetUserInformation from "shared/components/common/TweetUserInformation";

export type TweetStyles = {
  isTweetHideBorder?: boolean;
  drawLine?: "top" | "bottom";
};

export type TweetProps = {
  image?: string;
  styles?: TweetStyles;
};

const Tweet: FC<TweetProps> = ({ image, styles }) => {
  const { onMouseEnter, onMouseLeave } = usePositionFloatProfile();
  const current_account = useStore(currentAccountSelector);
  const avatar_size = 49;

  return (
    <S.TweetContainer
      className={classnames({ "hide-border": styles?.isTweetHideBorder })}
    >
      <S.Container>
        <TweetImageContainer
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <UserAvatar
            hoverable
            size={avatar_size}
            image={current_account?.personalInformation.profileImage}
          />
        </TweetImageContainer>
        <S.InformationContainer>
          <TweetUserInformation
            nickname={current_account?.personalInformation.nickname!}
            username={current_account?.personalInformation.username!}
          />
          <S.Content>{faker.lorem.words(25)}</S.Content>
          {image && <TweetImage image={image} />}
          <TweetReactions />
        </S.InformationContainer>
        {styles && (
          <S.IndicatorComment
            imageSize={avatar_size}
            className={classnames({
              top: styles?.drawLine === "top",
              bottom: styles?.drawLine === "bottom",
            })}
          />
        )}
      </S.Container>
      <TweetOptions />
    </S.TweetContainer>
  );
};

export default memo(Tweet);
