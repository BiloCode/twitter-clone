import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import DesignColumns from 'shared/components/layouts/DesignColumns';

const Explore : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <h1>Explorar</h1>
  </DesignColumns>
);

export default Explore;