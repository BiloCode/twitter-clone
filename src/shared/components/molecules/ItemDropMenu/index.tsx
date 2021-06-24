import { FC } from "react";
import * as S from "./styles";

type TProps = {
  icon: JSX.Element;
  text: string;
  onClick?(): void;
};

const ItemDropMenu: FC<TProps> = ({ icon, text, onClick }) => (
  <S.Container onClick={onClick}>
    <S.Icon>{icon}</S.Icon>
    <S.Text>{text}</S.Text>
  </S.Container>
);

export default ItemDropMenu;
