import * as S from "./styles";
import classNames from "classnames";

import Icon from "shared/components/atoms/Icon";

import { AiOutlineSearch } from "react-icons/ai";

type TProps = {
  isActive?: boolean;
  onFocus?(): void;
  onBlur?(): void;
};

const SearchBar = ({ isActive, onBlur, onFocus }: TProps) => (
  <S.InputContainer
    className={classNames({ active: isActive })}
    htmlFor="search-bar"
  >
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
);

export default SearchBar;
