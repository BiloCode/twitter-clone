import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import DesignColumns from 'shared/components/layouts/DesignColumns';

const Notifications : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <h1>Notificaciones</h1>
  </DesignColumns>
);

export default Notifications;