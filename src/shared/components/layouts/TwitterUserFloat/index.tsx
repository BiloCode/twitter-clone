import React, { FC, memo } from "react";
import * as Styled from "./styles";

import ShadedContainer from "shared/components/common/ShadedContainer";
import UserProfileDesign from "shared/components/common/UserProfileDesign";
import FollowButton from "shared/components/common/FollowButton";

import { TCoords } from "store/float_user_profile/types";
import { TAccountState } from "store/accounts/types";
import { SetActive } from "store/float_user_profile";

interface IProps {
  coords: TCoords;
  user_profile: TAccountState;
}

const TwitterUserFloat: FC<IProps> = ({ coords, user_profile }) => {
  const onMouseLeave = () => SetActive(false);

  return (
    <Styled.RootContainer
      top={coords.y}
      left={coords.x}
      onMouseLeave={onMouseLeave}
    >
      <ShadedContainer>
        <UserProfileDesign.Basic twitterUser={user_profile}>
          <FollowButton isFollow={false} />
        </UserProfileDesign.Basic>
      </ShadedContainer>
    </Styled.RootContainer>
  );
};

export default memo(TwitterUserFloat);
