import { BsUpload } from "react-icons/bs";
import * as S from "./styles";

import TweetIcon from "../../common/TweetIcon";
import configurationIcons from "./config";

const TweetReactions = () => {
  return (
    <S.Container>
      {configurationIcons(15, 105, 10).map((v, i) => (
        <TweetIcon
          key={i}
          icons={v.icons}
          amount={v.amount}
          colors={v.colors}
        />
      ))}
      <TweetIcon
        icons={{
          basic: <BsUpload />,
          selected: <BsUpload />,
        }}
      />
    </S.Container>
  );
};

export default TweetReactions;
