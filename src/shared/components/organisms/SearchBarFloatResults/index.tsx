import { useState } from "react";
import * as S from "./styles";

import { AiOutlineSearch } from "react-icons/ai";

import SearchBarItem from "shared/components/molecules/SearchBarItem";
import SearchBarItemSimple from "shared/components/molecules/SearchBarItemSimple";
import InputWithIcon from "shared/components/molecules/InputWithIcon";

const SearchBarFloatResults = () => {
  const [active, setActive] = useState<boolean>(false);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return (
    <S.MainContainer>
      <InputWithIcon
        onBlur={onBlur}
        onFocus={onFocus}
        isActive={active}
        placeholder="Write any name"
        icon={{ type: AiOutlineSearch }}
      />
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
