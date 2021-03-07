import { FC, memo } from "react";
import * as Styled from "./styles";

import ShadedContainer from "shared/components/common/ShadedContainer";
import UserProfileDesign from "shared/components/common/UserProfileDesign";
import FollowButton from "shared/components/common/FollowButton";

import { TCoords } from "store/float_user_profile/types";
import { TAccountState } from "store/accounts/types";
import { SetActive } from "store/float_user_profile";

type TwitterUserFloatProps = {
  coords: TCoords;
  user_profile: TAccountState;
};

const TwitterUserFloat: FC<TwitterUserFloatProps> = ({
  coords,
  user_profile,
}) => {
  const onMouseLeave = () => SetActive(false);

  return (
    <Styled.RootContainer
      top={coords.y}
      left={coords.x}
      onMouseLeave={onMouseLeave}
    >
      <ShadedContainer>
        <UserProfileDesign.Basic twitterUser={user_profile}>
          <FollowButton isFollow={false}>Seguir</FollowButton>
        </UserProfileDesign.Basic>
      </ShadedContainer>
    </Styled.RootContainer>
  );
};

export default memo(TwitterUserFloat);
