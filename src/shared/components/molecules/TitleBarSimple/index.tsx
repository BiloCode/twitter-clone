import { IconType } from "react-icons/lib";
import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import Title from "shared/components/atoms/Title";
import HoverableIcon from "shared/components/atoms/HoverableIcon";

type IProps = {
  title: string;
  subtitle?: string;
  icon?: IconType;
};

const TitleBarSimple = ({ title, icon, subtitle }: IProps) => (
  <S.Container>
    <S.TextContainer>
      <Title type="black">{title}</Title>
      {subtitle && <Text size="e-small">{subtitle}</Text>}
    </S.TextContainer>
    {icon && <HoverableIcon icon={icon} />}
  </S.Container>
);

export default TitleBarSimple;
