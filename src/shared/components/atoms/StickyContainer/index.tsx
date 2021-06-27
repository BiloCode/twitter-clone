import classNames from "classnames";
import { FC } from "react";
import * as S from "./styles";

type StickyType = "top" | "bottom";

type StickyProps = {
  type?: StickyType;
};

const StickyContainer: FC<StickyProps> = ({ children, type }) => (
  <S.MainContainer
    className={classNames({
      top: type === "top",
      bottom: type === "bottom",
    })}
  >
    {children}
  </S.MainContainer>
);

StickyContainer.defaultProps = {
  type: "bottom",
};

export default StickyContainer;
