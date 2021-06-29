import { FC } from 'react';
import Image from '@atoms/Image';
import * as S from './styles';

type TweetImageProps = {
  src: string;
};

const TweetImage: FC<TweetImageProps> = ({ src }) => (
  <S.Container>
    <Image src={src} />
  </S.Container>
);

export default TweetImage;
