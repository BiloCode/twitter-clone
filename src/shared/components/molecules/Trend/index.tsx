import { BsThreeDots } from "react-icons/bs";
import * as S from "./styles";

import HoverableIcon from "../../atoms/HoverableIcon";
import { colors } from "config/colors";
import Title from "shared/components/atoms/Title";
import Text from "shared/components/atoms/Text";

const Trend = () => (
  <S.Container>
    <Text size="e-small">Trending in Peru</Text>
    <Title type="small">Universitario</Title>
    <Text size="small">80.5K Tweets</Text>
    <S.AbsoluteContainer>
      <HoverableIcon>
        <BsThreeDots color={colors.textLight} />
      </HoverableIcon>
    </S.AbsoluteContainer>
  </S.Container>
);

export default Trend;
