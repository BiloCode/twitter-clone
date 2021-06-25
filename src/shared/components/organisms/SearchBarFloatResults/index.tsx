import { useState } from "react";
import * as S from "./styles";

import SearchBarItem from "shared/components/molecules/SearchBarItem";
import SearchBarItemSimple from "shared/components/molecules/SearchBarItemSimple";
import SearchBar from "shared/components/molecules/SearchBar";

const SearchBarFloatResults = () => {
  const [active, setActive] = useState<boolean>(false);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return (
    <S.MainContainer>
      <SearchBar isActive={active} onFocus={onFocus} onBlur={onBlur} />
      {active && (
        <S.FloatContainer>
          <div>
            <SearchBarItemSimple />
            <SearchBarItemSimple />
            <SearchBarItemSimple />
            <SearchBarItemSimple />
          </div>
          <div>
            <SearchBarItem isFollowing />
            <SearchBarItem />
            <SearchBarItem />
            <SearchBarItem />
            <SearchBarItem />
            <SearchBarItem />
          </div>
        </S.FloatContainer>
      )}
    </S.MainContainer>
  );
};

export default SearchBarFloatResults;
