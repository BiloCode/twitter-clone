import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import DesignColumns from "shared/components/layouts/DesignColumns";
import UserTrends from "shared/components/layouts/UserTrends";
import MainTrendExplore from "shared/components/common/MainTrendExplore";

const Explore: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <MainTrendExplore />
    <UserTrends />
  </DesignColumns>
);

export default Explore;
