import { FC } from "react";
import * as S from "./styles";
import { RouteComponentProps } from "@reach/router";

const Mentions: FC<RouteComponentProps> = () => (
  <div>
    <S.Container>
      <S.Title>No hay nada que ver aqui. Por ahora.</S.Title>
      <S.Subtitle>Cuando alguien te menciona, lo encontraras aqui</S.Subtitle>
    </S.Container>
  </div>
);

export default Mentions;
