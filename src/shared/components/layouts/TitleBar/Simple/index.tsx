import { FC } from "react";

import * as S from "./styles";
import * as GS from "../styles";

import HoverableIcon from "shared/components/common/HoverableIcon";

interface IProps {
  title: string;
  padding?: string;
  subtitle?: string;
  icon?: JSX.Element;
  activeBorder?: boolean;
}

const Simple: FC<IProps> = ({
  title,
  icon,
  subtitle,
  padding,
  activeBorder,
}) => (
  <GS.Container padding={padding} spaceBetween activeBorder={activeBorder}>
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
