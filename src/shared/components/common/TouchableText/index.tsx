import { FC } from "react";
import * as S from "./styles";
import classnames from "classnames";

type TProps = {
  text: string;
  center?: boolean;
  onClick?(): void;
};

const TouchableText: FC<TProps> = ({ text, center }) => (
  <S.Button className={classnames({ center })}>{text}</S.Button>
);

export default TouchableText;
