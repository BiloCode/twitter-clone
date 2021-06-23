import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { GiStarsStack } from "react-icons/gi";

import faker from "faker";
import * as S from "./styles";

import TitleBar from "shared/components/layouts/TitleBar";
import DesignColumns from "shared/components/layouts/DesignColumns";
import SeparatorBar from "shared/components/common/SeparatorBar";
import Tweet from "shared/components/layouts/Tweet";
import NewTweetControls from "shared/components/common/NewTweetControls";
import TweetCommentBig from "shared/components/layouts/TweetCommentBig";

const Home: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <S.TitleBarContainer>
      <TitleBar.Simple
        title="Inicio"
        icon={<GiStarsStack />}
        styles={{ activeBorder: true }}
      />
    </S.TitleBarContainer>
    <S.ContainerTweets>
      <NewTweetControls />
      <SeparatorBar />
      <TweetCommentBig />
      <Tweet image={faker.random.image()} />
      <Tweet />
      <Tweet />
      <Tweet image={faker.random.image()} />
    </S.ContainerTweets>
  </DesignColumns>
);

export default Home;
