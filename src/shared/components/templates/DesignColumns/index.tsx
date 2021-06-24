import { FC } from "react";
import * as S from "./styles";

import SearchBar from "../../organisms/SearchBar";
import UserTrends from "../../organisms/UserTrends";
import UserRecomendations from "../../organisms/UserRecomendations";
import StickyContainer from "shared/components/atoms/StickyContainer";

import useRouteCheck from "shared/hooks/useRouteCheck";

import { useScrollableRightContent } from "shared/context/ScrollableRightContent/context";

const DesignColumns: FC = ({ children }) => {
  const { rightElementRef } = useScrollableRightContent();
  const routeCheck = useRouteCheck();

  return (
    <S.Container>
      <S.LeftContainer>{children}</S.LeftContainer>
      <S.RightContainer>
        <S.AsideContent>
          {!routeCheck("explore") && (
            <StickyContainer>
              <S.SearchContainer>
                <SearchBar />
              </S.SearchContainer>
            </StickyContainer>
          )}
          <S.ScrollableContainer ref={rightElementRef}>
            {!routeCheck("explore") && <UserTrends />}
            <UserRecomendations />
          </S.ScrollableContainer>
        </S.AsideContent>
      </S.RightContainer>
    </S.Container>
  );
};

export default DesignColumns;
