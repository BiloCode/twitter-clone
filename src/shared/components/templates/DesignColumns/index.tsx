import { FC } from "react";
import * as S from "./styles";

import UserMessageFloat from "../UserMessageFloat";
import UserTrends from "../../organisms/UserTrends";
import Portals from "@atoms/Portals";
import SearchBar from "../../organisms/SearchBarFloatResults";
import UserRecomendations from "../../organisms/UserRecomendations";
import StickyContainer from "@atoms/StickyContainer";

import useRouteCheck from "@hooks/useRouteCheck";

import { useScrollableRightContent } from "@contexts/ScrollableRightContent/context";

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
      <Portals>
        <UserMessageFloat />
      </Portals>
    </S.Container>
  );
};

export default DesignColumns;
