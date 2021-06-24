import { FC } from "react";
import * as S from "./styles";

import UserAvatar from "shared/components/atoms/UserAvatar";
import TextWithIcon from "shared/components/molecules/TextWithIcon";
import FollowSection from "shared/components/molecules/FollowSection";
import BackgroundImage from "shared/components/molecules/BackgroundImage";
import UserProfileInformation from "shared/components/molecules/UserProfileInformation";

import { TAccountState } from "store/accounts/types";

import { BiCalendar } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface IProps {
  twitterUser?: TAccountState;
}

const UserProfileExtends: FC<IProps> = ({ children, twitterUser }) => {
  const {
    personalInformation: {
      nickname,
      username,
      backgroundImage,
      description,
      profileImage,
    },
    createdAt,
    followers,
    following,
  } = twitterUser!;

  const dateNow = new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(createdAt);

  return (
    <>
      <BackgroundImage url={backgroundImage} />
      <S.BottomContent>
        <div>
          <S.ButtonsContainer>
            <S.ProfileImageContainer>
              <UserAvatar image={profileImage} imageSize="ee-big" hoverable />
            </S.ProfileImageContainer>
            {children}
          </S.ButtonsContainer>
          <UserProfileInformation
            nickname={nickname}
            username={username}
            description={description}
          />
        </div>
        <S.UserCreateData>
          <TextWithIcon icon={HiOutlineLocationMarker} text="Lima, Peru" />
          <TextWithIcon icon={BiCalendar} text={`Se unio el ${dateNow}`} />
        </S.UserCreateData>
        <FollowSection followers={followers.length} following={following.length} />
      </S.BottomContent>
    </>
  );
};

export default UserProfileExtends;
