import { FC } from "react";
import Text from "shared/components/atoms/Text";
import Title from "shared/components/atoms/Title";
import * as S from "./styles";

type DefaultContentProps = {
  title: string;
  subtitle: string;
};

const DefaultContent: FC<DefaultContentProps> = ({ children, title, subtitle }) => (
  <S.Container>
    <Title>{title}</Title>
    <Text>{subtitle}</Text>
    {children}
  </S.Container>
);

export default DefaultContent;
