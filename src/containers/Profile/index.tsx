import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'

import StatusBar from 'components/layouts/StatusBar'
import DesignColumns from 'components/layouts/DesignColumns';
import UserProfileDesign from 'components/layouts/UserProfileDesign';

import { useStore } from 'effector-react';
import current_account_selector from 'store/account/selectors/current_account_selector';

const Profile : FC<RouteComponentProps> = () => {
  const current_account = useStore(current_account_selector);
  
  return <DesignColumns>
    <StatusBar.Push title={current_account?.personalInformation.nickname!} subtitle={'15 Tweets'} />
    <UserProfileDesign.Extend twitterUser={current_account} />
  </DesignColumns>
};

export default Profile;