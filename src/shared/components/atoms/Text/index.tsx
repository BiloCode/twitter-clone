import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type TextSize = "small" | "default" | "e-small";
type TProps = {
  size?: TextSize;
};

const Text: FC<TProps> = ({ children, size }) => (
  <S.MainText
    className={classNames({
      small: size === "small",
      "e-small": size === "e-small",
    })}
  >
    {children}
  </S.MainText>
);

export default Text;
