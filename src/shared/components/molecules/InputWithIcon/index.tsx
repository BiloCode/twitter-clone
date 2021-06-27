import * as S from "./styles";
import classNames from "classnames";

import Icon from "shared/components/atoms/Icon";

import { IconType } from "react-icons/lib";

type TProps = {
  isActive?: boolean;
  placeholder: string;
  onBlur?(): void;
  onFocus?(): void;
  icon: {
    type: IconType;
    position?: "right" | "left";
  };
};

const InputWithIcon = ({
  icon,
  onBlur,
  onFocus,
  isActive,
  placeholder,
}: TProps) => (
  <S.InputContainer
    className={classNames({ active: isActive, right: icon.position === "right" })}
    htmlFor="search-bar"
  >
    <S.Icon>
      <Icon type={icon.type} size="medium" />
    </S.Icon>
    <S.Input
      type="text"
      id="search-bar"
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  </S.InputContainer>
);

export default InputWithIcon;
