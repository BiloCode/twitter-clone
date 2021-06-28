import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { GiStarsStack } from "react-icons/gi";

import faker from "faker";
import * as S from "./styles";

import Tweet from "@organisms/Tweet";
import DesignColumns from "@templates/DesignColumns";
import NewTweetControls from "@organisms/NewTweetControls";
import TweetCommentBig from "@templates/TweetCommentBig";
import TitleBarSimple from "@molecules/TitleBarSimple";
import StickyContainer from "@atoms/StickyContainer";

const Home: FC<RouteComponentProps> = () => (
  <DesignColumns>
    <StickyContainer>
      <S.TitleBarContainer>
        <TitleBarSimple title="Inicio" icon={GiStarsStack} />
      </S.TitleBarContainer>
    </StickyContainer>
    <S.ContainerTweets>
      <NewTweetControls />
      <S.SeparatorBar />
      <TweetCommentBig />
      <Tweet image={faker.random.image()} />
      <Tweet />
      <Tweet />
      <Tweet image={faker.random.image()} />
    </S.ContainerTweets>
  </DesignColumns>
);

export default Home;
