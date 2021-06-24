import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import { GiStarsStack } from "react-icons/gi";

import faker from "faker";
import * as S from "./styles";

import Tweet from "shared/components/organisms/Tweet";
import DesignColumns from "shared/components/templates/DesignColumns";
import NewTweetControls from "shared/components/organisms/NewTweetControls";
import TweetCommentBig from "shared/components/templates/TweetCommentBig";
import TitleBarSimple from "shared/components/molecules/TitleBarSimple";
import StickyContainer from "shared/components/atoms/StickyContainer";

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
