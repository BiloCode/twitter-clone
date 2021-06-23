import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import TitleBar from "shared/components/layouts/TitleBar";
import DesignColumns from "shared/components/layouts/DesignColumns";

const Saves: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <TitleBar.Simple title="Bookmarks" subtitle="@BillyAlex" />
  </DesignColumns>
);

export default Saves;
