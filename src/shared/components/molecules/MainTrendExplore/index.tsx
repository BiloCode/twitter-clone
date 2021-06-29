import faker from 'faker';
import * as S from './styles';

const MainTrendExplore = () => (
  <S.Container>
    <S.Banner src={faker.random.image()} alt="" />
    <S.BannerTextContent>
      <S.Title>{faker.random.words(6)}</S.Title>
    </S.BannerTextContent>
  </S.Container>
);

export default MainTrendExplore;
