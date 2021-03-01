import { FC } from "react";
import * as S from "./styles";

import { BsUpload } from "react-icons/bs";

import TweetIcon from "../../common/TweetIcon";
import configurationIcons from "./config";

type TProps = {
  isBig?: boolean;
};

const TweetReactions: FC<TProps> = ({ isBig }) => {
  return (
    <S.Container isBig={isBig}>
      {configurationIcons(15, 105, 10).map((v, i) => (
        <TweetIcon
          key={i}
          isBig={isBig}
          icons={v.icons}
          amount={v.amount}
          colors={v.colors}
        />
      ))}
      <TweetIcon
        isBig={isBig}
        icons={{
          basic: <BsUpload />,
          selected: <BsUpload />,
        }}
      />
    </S.Container>
  );
};

export default TweetReactions;
