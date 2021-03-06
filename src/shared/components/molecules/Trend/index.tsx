import { BsThreeDots } from "react-icons/bs";
import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import Title from "shared/components/atoms/Title";
import HoverableIcon from "../../atoms/HoverableIcon";

const Trend = () => (
  <S.Container>
    <Text size="e-small">Trending in Peru</Text>
    <Title type="small">Universitario</Title>
    <Text size="small">80.5K Tweets</Text>
    <S.AbsoluteContainer>
      <HoverableIcon icon={BsThreeDots} color="light" />
    </S.AbsoluteContainer>
  </S.Container>
);

export default Trend;
