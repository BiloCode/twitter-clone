import * as S from "./styles";
import { BiCog } from "react-icons/bi";

import TitleBar from "shared/components/layouts/TitleBar";
import TouchableText from "shared/components/common/TouchableText";
import Trend from "shared/components/common/Trend";

const provicionalTrends = new Array(5).fill("");

const UserTrends = () => (
  <S.Container>
    <S.TitleBarContainer>
      <TitleBar.Simple title="Trends for you" icon={<BiCog />} />
    </S.TitleBarContainer>
    {provicionalTrends.map((v, i) => (
      <Trend key={i} />
    ))}
    <TouchableText text="Show more" />
  </S.Container>
);

export default UserTrends;
