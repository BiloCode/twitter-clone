import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { GiStarsStack } from "react-icons/gi";

import * as Styled from "./styles";

import TitleBar from "shared/components/layouts/TitleBar";
import DesignColumns from "shared/components/layouts/DesignColumns";
import SeparatorBar from "shared/components/common/SeparatorBar";
import Tweet from "shared/components/layouts/Tweet";
import NewTweetControls from "shared/components/common/NewTweetControls";

const Home: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <TitleBar.Simple title="Inicio" icon={<GiStarsStack />} />
    <Styled.ContainerTweets>
      <NewTweetControls />
      <SeparatorBar />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Styled.ContainerTweets>
  </DesignColumns>
);

export default Home;
