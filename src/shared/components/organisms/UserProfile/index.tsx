import { FC } from "react";
import * as Styled from "./styles";
import { TAccountState } from "@store/accounts/types";

import CommonFollowers from "@molecules/CommonFollowers";
import UserAvatar from "@atoms/UserAvatar";
import UserFollowSection from "@molecules/UserFollowSection";
import UserProfileInformation from "@molecules/UserProfileInformation";

interface IProps {
  twitterUser?: TAccountState;
}

const UserProfile: FC<IProps> = ({ children, twitterUser }) => {
  const {
    personalInformation: { nickname, username, description, profileImage },
    followers,
    following,
  } = twitterUser!;

  return (
    <>
      <Styled.BottomContent>
        <Styled.ButtonsContainer>
          <UserAvatar imageSize="big" image={profileImage} />
          {children}
        </Styled.ButtonsContainer>
        <UserProfileInformation
          isModal
          nickname={nickname}
          username={username}
          description={description}
        />
        <UserFollowSection
          followers={followers.length}
          following={following.length}
        />
        <CommonFollowers />
      </Styled.BottomContent>
    </>
  );
};

export default UserProfile;
