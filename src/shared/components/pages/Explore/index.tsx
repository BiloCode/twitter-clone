import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import UserTrends from "shared/components/organisms/UserTrends";
import DesignColumns from "shared/components/templates/DesignColumns";
import MainTrendExplore from "shared/components/molecules/MainTrendExplore";
import TitleBarSearch from "shared/components/molecules/TitleBarSearch";
import StickyContainer from "shared/components/atoms/StickyContainer";

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
