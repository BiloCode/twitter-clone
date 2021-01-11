import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'

import StatusBar from 'shared/components/layouts/StatusBar'
import DesignColumns from 'shared/components/layouts/DesignColumns';
import UserProfileDesign from 'shared/components/layouts/UserProfileDesign';

import { useStore } from 'effector-react';
import currentAccountSelector from 'store/accounts/selectors/currentAccountSelector';

const Profile : FC<RouteComponentProps> = () => {
  const current_account = useStore(currentAccountSelector);
  
  return <DesignColumns>
    <StatusBar.Push title={current_account?.personalInformation.nickname!} subtitle={'15 Tweets'} />
    <UserProfileDesign.Extend twitterUser={current_account} />
  </DesignColumns>
};

export default Profile;