import { FC } from "react";
import * as Styled from "./styles";

import UserTrends from "../UserTrends";
import UserRecomendations from "../UserRecomendations";

import { useScrollableRightContent } from "shared/context/ScrollableRightContent/context";

const DesignColumns: FC = ({ children }) => {
  const { rightElementRef } = useScrollableRightContent();

  return (
    <Styled.Container>
      <Styled.LeftContainer>{children}</Styled.LeftContainer>
      <Styled.RightContainer>
        <div ref={rightElementRef}>
          <UserTrends />
          <UserRecomendations />
        </div>
      </Styled.RightContainer>
    </Styled.Container>
  );
};

export default DesignColumns;
