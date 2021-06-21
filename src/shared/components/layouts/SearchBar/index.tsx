import { useState } from "react";
import * as S from "./styles";

import { AiOutlineSearch } from "react-icons/ai";
import classNames from "classnames";

const SearchBar = () => {
  const [active, setActive] = useState<boolean>(false);

  const onFocus = () => setActive(true);
  const onBlur = () => setActive(false);

  return (
    <S.MainContainer>
      <S.InputContainer className={classNames({ active })} htmlFor="search-bar">
        <S.Icon>
          <AiOutlineSearch />
        </S.Icon>
        <S.Input
          id="search-bar"
          placeholder="Search Twitter"
          type="text"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </S.InputContainer>
      {active && <S.FloatContainer></S.FloatContainer>}
    </S.MainContainer>
  );
};

export default SearchBar;
