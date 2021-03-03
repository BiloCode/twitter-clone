import { FC } from "react";
import UserRecomendations from "../UserRecomendations";
import * as Styled from "./styles";

const DesignColumns: FC = ({ children }) => (
  <Styled.Container>
    <Styled.LeftContainer>{children}</Styled.LeftContainer>
    <Styled.RightContainer>
      <UserRecomendations />
    </Styled.RightContainer>
  </Styled.Container>
);

export default DesignColumns;
