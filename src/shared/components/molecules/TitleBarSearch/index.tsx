import * as S from "./styles";

import { BiCog } from "react-icons/bi";

import SearchBar from "shared/components/organisms/SearchBar";
import HoverableIcon from "shared/components/atoms/HoverableIcon";

const TitleBarSearch = () => (
  <S.MainContainer>
    <SearchBar />
    <S.IconContainer>
      <HoverableIcon>
        <BiCog />
      </HoverableIcon>
    </S.IconContainer>
  </S.MainContainer>
);

export default TitleBarSearch;
