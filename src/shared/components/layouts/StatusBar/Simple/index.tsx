import { FC } from "react";

import * as S from "./styles";
import * as GS from "../styles";

import HoverableIcon from "shared/components/common/HoverableIcon";

interface IProps {
  title: string;
  subtitle?: string;
  activeBorder?: boolean;
  icon?: JSX.Element;
}

const Simple: FC<IProps> = ({ title, icon, subtitle, activeBorder }) => (
  <GS.Container spaceBetween activeBorder={activeBorder}>
    <S.TextContainer>
      <GS.Title>{title}</GS.Title>
      {subtitle && <GS.Subtitle>{subtitle}</GS.Subtitle>}
    </S.TextContainer>

    {icon && <HoverableIcon>{icon}</HoverableIcon>}
  </GS.Container>
);

Simple.defaultProps = {
  activeBorder: true,
};

export default Simple;
