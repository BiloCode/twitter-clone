import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import Tweet from "shared/components/organisms/Tweet";

const Tweets: FC<RouteComponentProps> = () => (
  <div>
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
    <Tweet />
  </div>
);

export default Tweets;
