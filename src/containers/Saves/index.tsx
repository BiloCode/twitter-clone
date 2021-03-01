import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import StatusBar from "shared/components/layouts/StatusBar";
import DesignColumns from "shared/components/layouts/DesignColumns";

const Saves: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <StatusBar.Simple title="Bookmarks" subtitle="@BillyAlex" />
  </DesignColumns>
);

export default Saves;
