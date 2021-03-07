import { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import * as S from "./styles";
import * as GS from "../styles";

import HoverableIcon from "shared/components/common/HoverableIcon";

type Icon = {
  element: JSX.Element;
  onClick?(): void;
};

interface PushProps {
  title: string;
  icons?: Icon[];
  subtitle?: string;
  styles?: GS.ContainerStylesType;
  onClickBack?(): void;
}

const Push: FC<PushProps> = ({
  title,
  subtitle,
  icons,
  styles,
  onClickBack,
}) => (
  <GS.Container
    spaceBetween
    sticky={styles?.sticky}
    activeBorder={styles?.activeBorder}
  >
    <S.RowContent>
      <S.BackIconContainer>
        <HoverableIcon onClick={onClickBack}>
          <AiOutlineArrowLeft />
        </HoverableIcon>
      </S.BackIconContainer>
      <S.TextContainer>
        <GS.Title>{title}</GS.Title>
        {subtitle && <GS.Subtitle>{subtitle}</GS.Subtitle>}
      </S.TextContainer>
    </S.RowContent>

    {icons && (
      <S.RowContent>
        {icons?.map((v, i) => (
          <HoverableIcon key={i} onClick={v.onClick}>
            {v.element}
          </HoverableIcon>
        ))}
      </S.RowContent>
    )}
  </GS.Container>
);

export default Push;
