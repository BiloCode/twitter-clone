import React from 'react';
import { Router } from '@reach/router';

//Menu
import RootLayout from 'components/layouts/RootLayout';

//Containers
import Home from 'containers/Home';

const DefaultRouter = () => (
  <Router>
    <RootLayout path='/' >
      <Home path='home' />
    </RootLayout>
  </Router>
);

export default DefaultRouter;