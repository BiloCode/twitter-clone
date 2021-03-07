import { FC } from "react";
import * as S from "./styles";

import UserTrends from "../UserTrends";
import UserRecomendations from "../UserRecomendations";

import { useScrollableRightContent } from "shared/context/ScrollableRightContent/context";
import useRouteCheck from "shared/hooks/useRouteCheck";

const DesignColumns: FC = ({ children }) => {
  const { rightElementRef } = useScrollableRightContent();
  const routeCheck = useRouteCheck();

  return (
    <S.Container>
      <S.LeftContainer>{children}</S.LeftContainer>
      <S.RightContainer>
        <S.AsideContent ref={rightElementRef}>
          {!routeCheck("explore") && <UserTrends />}
          <UserRecomendations />
        </S.AsideContent>
      </S.RightContainer>
    </S.Container>
  );
};

export default DesignColumns;
