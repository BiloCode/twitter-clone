import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

import UserTrends from '@organisms/UserTrends';
import DesignColumns from '@templates/DesignColumns';
import MainTrendExplore from '@molecules/MainTrendExplore';
import TitleBarSearch from '@molecules/TitleBarSearch';
import StickyContainer from '@atoms/StickyContainer';

const Explore: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <StickyContainer>
      <TitleBarSearch />
    </StickyContainer>
    <MainTrendExplore />
    <UserTrends page />
  </DesignColumns>
);

export default Explore;
