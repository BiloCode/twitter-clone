import React, { FC } from 'react';
import { Redirect , RouteComponentProps } from '@reach/router';

const Default : FC<RouteComponentProps> = () => (
  <Redirect noThrow to='/home' />
);

export default Default;