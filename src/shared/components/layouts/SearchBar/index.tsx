import { useState } from "react";
import classNames from "classnames";
import * as S from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import SearchBarItem from "shared/components/common/SearchBarItem";
import SearchBarItemSimple from "shared/components/common/SearchBarItemSimple";
import Icon from "shared/components/atoms/Icon";

const SearchBar = () => {
  const [active, setActive] = useState<boolean>(false);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return (
    <S.MainContainer>
      <S.InputContainer className={classNames({ active })} htmlFor="search-bar">
        <S.Icon>
          <Icon type={AiOutlineSearch} size="medium" />
        </S.Icon>
        <S.Input
          type="text"
          id="search-bar"
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Search Twitter"
        />
      </S.InputContainer>
      {active && (
        <S.FloatContainer>
          <div>
            <SearchBarItemSimple />

            <SearchBarItemSimple />
            <SearchBarItemSimple />
          </div>
          <div>
            <SearchBarItem isFollowing />
            <SearchBarItem />
            <SearchBarItem />
            <SearchBarItem />
          </div>
        </S.FloatContainer>
      )}
    </S.MainContainer>
  );
};

export default SearchBar;
