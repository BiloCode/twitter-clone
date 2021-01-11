import React from 'react';
import { Router } from '@reach/router';

//Menu
import RootLayout from 'shared/components/layouts/RootLayout';

//Containers
import Home from 'containers/Home';
import Default from 'containers/Default';
import Notifications from 'containers/Notifications';
import Explore from 'containers/Explore';
import Saves from 'containers/Saves';
import Messages from 'containers/Messages';
import Profile from 'containers/Profile';
import Lists from 'containers/Lists';

const DefaultRouter = () => (
  <Router>
    <RootLayout path='/' >
      <Home path='home' />
      <Explore path='explore' />
      <Notifications path='notifications' />
      <Saves path='i/bookmarks' />
      <Messages path='messages' />
      <Lists path=':username/lists' />
      <Profile path=':username' />
      <Default default />
    </RootLayout>
  </Router>
);

export default DefaultRouter;