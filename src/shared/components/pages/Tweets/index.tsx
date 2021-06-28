import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import Tweet from "@organisms/Tweet";

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
