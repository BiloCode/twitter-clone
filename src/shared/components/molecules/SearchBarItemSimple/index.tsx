import * as S from "./styles";

type IProps = {
  isTrending?: boolean;
};

const SearchBarItemSimple = ({ isTrending }: IProps) => (
  <S.MainContainer>
    <S.Text>Result Dictionary</S.Text>
    {isTrending && <S.Text className="light">Trending</S.Text>}
  </S.MainContainer>
);

export default SearchBarItemSimple;
