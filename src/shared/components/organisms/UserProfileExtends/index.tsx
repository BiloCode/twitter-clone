import { FC } from 'react';

import UserAvatar from '@atoms/UserAvatar';
import TextWithIcon from '@molecules/TextWithIcon';
import UserFollowSection from '@molecules/UserFollowSection';
import BackgroundImage from '@molecules/BackgroundImage';
import UserProfileInformation from '@molecules/UserProfileInformation';

import { TAccountState } from '@store/accounts/types';

import { BiCalendar } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import * as S from './styles';

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

  const dateNow = new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
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
        <UserFollowSection
          followers={followers.length}
          following={following.length}
        />
      </S.BottomContent>
    </>
  );
};

export default UserProfileExtends;
