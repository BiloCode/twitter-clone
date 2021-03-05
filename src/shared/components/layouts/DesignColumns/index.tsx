import { FC } from "react";
import * as S from "./styles";

import UserTrends from "../UserTrends";
import UserRecomendations from "../UserRecomendations";

import { useScrollableRightContent } from "shared/context/ScrollableRightContent/context";

const DesignColumns: FC = ({ children }) => {
  const { rightElementRef } = useScrollableRightContent();

  return (
    <S.Container>
      <S.LeftContainer>{children}</S.LeftContainer>
      <S.RightContainer>
        <S.AsideContent ref={rightElementRef}>
          <UserTrends />
          <UserRecomendations />
        </S.AsideContent>
      </S.RightContainer>
    </S.Container>
  );
};

export default DesignColumns;
