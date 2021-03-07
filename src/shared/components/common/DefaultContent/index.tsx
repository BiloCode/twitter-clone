import { FC } from "react";
import * as S from "./styles";

type DefaultContentProps = {
  title: string;
  subtitle: string;
};

const DefaultContent: FC<DefaultContentProps> = ({
  children,
  title,
  subtitle,
}) => (
  <S.Container>
    <S.Title>{title}</S.Title>
    <S.Subtitle>{subtitle}</S.Subtitle>
    {children}
  </S.Container>
);

export default DefaultContent;
