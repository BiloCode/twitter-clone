import { FC } from "react";
import * as S from "./styles";

import Image from "@atoms/Image";

type TweetImageProps = {
  src: string;
};

const TweetImage: FC<TweetImageProps> = ({ src }) => (
  <S.Container>
    <Image src={src} />
  </S.Container>
);

export default TweetImage;
