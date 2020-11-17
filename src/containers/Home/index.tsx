import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router'
import * as Styled from './styles';

import StatusBar from './components/StatusBar';
import DesignColumns from 'components/layouts/DesignColumns';
import SeparatorBar from 'components/common/SeparatorBar';

const Home : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <StatusBar />
    <Styled.ContainerTweets>
      <SeparatorBar />
    </Styled.ContainerTweets>
  </DesignColumns>
);

export default Home;