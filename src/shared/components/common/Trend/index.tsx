import { BsThreeDots } from "react-icons/bs";
import * as S from "./styles";

import HoverableIcon from "../HoverableIcon";
import { colors } from "config/colors";

const Trend = () => (
  <S.Container>
    <S.PrevTitle>Trending in Peru</S.PrevTitle>
    <S.Title>Universitario</S.Title>
    <S.TweetsNumber>80.5K Tweets</S.TweetsNumber>
    <S.AbsoluteContainer>
      <HoverableIcon>
        <BsThreeDots color={colors.textLight} />
      </HoverableIcon>
    </S.AbsoluteContainer>
  </S.Container>
);

export default Trend;
