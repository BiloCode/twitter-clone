import * as S from "./styles";
import { BiCog } from "react-icons/bi";

import Trend from "shared/components/molecules/Trend";
import TitleBarSimple from "shared/components/molecules/TitleBarSimple";
import HoverableText from "shared/components/atoms/HoverableText";
import classNames from "classnames";

const provicionalTrends = new Array(5).fill("");

type Props = {
  page?: boolean;
};

const UserTrends = ({ page }: Props) => (
  <S.Container className={classNames({ page })}>
    <S.TitleBarContainer>
      <TitleBarSimple title="Trends for you" icon={BiCog} />
    </S.TitleBarContainer>
    {provicionalTrends.map((v, i) => (
      <Trend key={i} />
    ))}
    <HoverableText text="Show more" />
  </S.Container>
);

export default UserTrends;
