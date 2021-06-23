import { FC } from "react";

import * as S from "./styles";
import * as GS from "../styles";

import HoverableIcon from "shared/components/common/HoverableIcon";

interface IProps {
  title: string;
  subtitle?: string;
  icon?: JSX.Element;
  styles?: GS.ContainerStylesType;
}

const Simple: FC<IProps> = ({ title, icon, subtitle, styles }) => (
  <GS.Container
    spaceBetween
    // sticky={styles?.sticky}
    padding={styles?.padding}
    activeBorder={styles?.activeBorder}
  >
    <S.TextContainer>
      <GS.Title>{title}</GS.Title>
      {subtitle && <GS.Subtitle>{subtitle}</GS.Subtitle>}
    </S.TextContainer>
    {icon && <HoverableIcon>{icon}</HoverableIcon>}
  </GS.Container>
);

export default Simple;
