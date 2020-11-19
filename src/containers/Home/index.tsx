import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { GiStarsStack } from 'react-icons/gi';

import * as Styled from './styles';

import StatusBar from 'components/layouts/StatusBar';
import DesignColumns from 'components/layouts/DesignColumns';
import SeparatorBar from 'components/common/SeparatorBar';

const Home : FC<RouteComponentProps> = () => (
  <DesignColumns>
    <StatusBar.Simple title='Inicio' icon={<GiStarsStack />} />
    <Styled.ContainerTweets>
      <SeparatorBar />
    </Styled.ContainerTweets>
  </DesignColumns>
);

export default Home;