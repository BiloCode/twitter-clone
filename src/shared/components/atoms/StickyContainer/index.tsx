import { FC } from "react";
import * as S from "./styles";

const StickyContainer: FC = ({ children }) => (
  <S.MainContainer>{children}</S.MainContainer>
);

export default StickyContainer;
