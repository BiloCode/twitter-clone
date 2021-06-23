import * as S from "./styles";
import { BiCog } from "react-icons/bi";

import Trend from "shared/components/common/Trend";
import TitleBarSimple from "shared/components/molecules/TitleBarSimple";
import TouchableText from "shared/components/common/TouchableText";

const provicionalTrends = new Array(5).fill("");

const UserTrends = () => (
  <S.Container>
    <S.TitleBarContainer>
      <TitleBarSimple title="Trends for you" icon={BiCog} />
    </S.TitleBarContainer>
    {provicionalTrends.map((v, i) => (
      <Trend key={i} />
    ))}
    <TouchableText text="Show more" />
  </S.Container>
);

export default UserTrends;
