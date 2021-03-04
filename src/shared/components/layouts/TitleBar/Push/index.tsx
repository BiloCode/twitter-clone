import React, { FC } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import * as S from "./styles";
import * as GS from "../styles";

import HoverableIcon from "shared/components/common/HoverableIcon";

type Icon = {
  element: JSX.Element;
  onClick?(): void;
};

interface IProps {
  title: string;
  icons?: Icon[];
  subtitle?: string;
  onClickBack?(): void;
}

const Push: FC<IProps> = ({ title, subtitle, icons, onClickBack }) => (
  <GS.Container spaceBetween>
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
