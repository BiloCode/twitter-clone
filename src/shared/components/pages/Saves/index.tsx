import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import DesignColumns from "shared/components/templates/DesignColumns";
import TitleBarSimple from "shared/components/molecules/TitleBarSimple";

const Saves: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <TitleBarSimple title="Bookmarks" subtitle="@BillyAlex" />
  </DesignColumns>
);

export default Saves;
