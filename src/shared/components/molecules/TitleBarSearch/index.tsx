import * as S from "./styles";

import { BiCog } from "react-icons/bi";

import SearchBarFloatResults from "@organisms/SearchBarFloatResults";
import HoverableIcon from "@atoms/HoverableIcon";

const TitleBarSearch = () => (
  <S.MainContainer>
    <SearchBarFloatResults />
    <S.IconContainer>
      <HoverableIcon icon={BiCog} />
    </S.IconContainer>
  </S.MainContainer>
);

export default TitleBarSearch;
