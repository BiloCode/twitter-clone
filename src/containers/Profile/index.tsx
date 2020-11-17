import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import DesignColumns from 'components/layouts/DesignColumns';
import UserProfileDesign from 'components/layouts/UserProfileDesign';

const Profile : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <UserProfileDesign />
  </DesignColumns>
);

export default Profile;