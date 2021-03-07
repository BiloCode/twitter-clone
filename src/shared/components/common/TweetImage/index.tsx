import { FC } from "react";
import * as S from "./styles";

type TweetImageProps = {
  image: string;
};

const TweetImage: FC<TweetImageProps> = ({ image }) => (
  <S.Container>
    <S.ImageTweet src={image} />
  </S.Container>
);

export default TweetImage;
