import * as S from './styles';

type ImageProps = {
  src: string;
  alt?: string;
};

const Image = ({ src, alt }: ImageProps) => (
  <S.MainImage src={src} alt={alt} draggable={false} />
);

export default Image;
