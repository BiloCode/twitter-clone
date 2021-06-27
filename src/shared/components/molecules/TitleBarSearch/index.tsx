import * as S from "./styles";

import { BiCog } from "react-icons/bi";

import SearchBarFloatResults from "shared/components/organisms/SearchBarFloatResults";
import HoverableIcon from "shared/components/atoms/HoverableIcon";

const TitleBarSearch = () => (
  <S.MainContainer>
    <SearchBarFloatResults />
    <S.IconContainer>
      <HoverableIcon icon={BiCog} />
    </S.IconContainer>
  </S.MainContainer>
);

export default TitleBarSearch;
