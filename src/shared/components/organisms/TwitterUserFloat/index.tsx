import { FC, memo } from "react";
import * as Styled from "./styles";

import ShadedContainer from "shared/components/atoms/ShadedContainer";
import UserProfile from "shared/components/organisms/UserProfile";
import FollowButton from "shared/components/atoms/FollowButton";

import { TCoords } from "store/float_user_profile/types";
import { TAccountState } from "store/accounts/types";
import { SetActive } from "store/float_user_profile";

type TwitterUserFloatProps = {
  coords: TCoords;
  user_profile: TAccountState;
};

const TwitterUserFloat: FC<TwitterUserFloatProps> = ({ coords, user_profile }) => {
  const onMouseLeave = () => SetActive(false);

  return (
    <Styled.RootContainer
      top={coords.y}
      left={coords.x}
      onMouseLeave={onMouseLeave}
    >
      <ShadedContainer>
        <UserProfile twitterUser={user_profile}>
          <FollowButton isFollow={false}>Seguir</FollowButton>
        </UserProfile>
      </ShadedContainer>
    </Styled.RootContainer>
  );
};

export default memo(TwitterUserFloat);
