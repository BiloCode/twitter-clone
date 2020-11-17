import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import DesignColumns from 'components/layouts/DesignColumns';

const Lists : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <h1>Listas</h1>
  </DesignColumns>
);

export default Lists;