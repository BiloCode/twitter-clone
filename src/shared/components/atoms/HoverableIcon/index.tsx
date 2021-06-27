import classNames from "classnames";
import * as Styled from "./styles";

import { IconType } from "react-icons";

interface IProps {
  color?: "default" | "light";
  icon: IconType;
  onClick?(): void;
}

const HoverableIcon = ({ color, onClick, icon: Icon }: IProps) => (
  <Styled.Container
    onClick={onClick}
    className={classNames({ light: color === "light" })}
  >
    <Styled.Icon>
      <Icon />
    </Styled.Icon>
  </Styled.Container>
);

export default HoverableIcon;
