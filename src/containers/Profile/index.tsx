import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'

import StatusBar from 'components/layouts/StatusBar'
import DesignColumns from 'components/layouts/DesignColumns';
import UserProfileDesign from 'components/layouts/UserProfileDesign';

import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';

const Profile : FC<RouteComponentProps> = () => {
  const Account = useRecoilValue(CurrentAccountSelector);
  
  return <DesignColumns>
    <StatusBar.Push title={Account?.personalInformation.nickname!} subtitle={'15 Tweets'} />
    <UserProfileDesign />
  </DesignColumns>
};

export default Profile;