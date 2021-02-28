import { FC, memo, useState } from "react";
import * as S from "./styles";

import classnames from "classnames";
import { colors } from "config/colors";

export type TIconColor = {
  background?: string;
  text?: string;
};

export type TIconType = {
  basic: JSX.Element;
  selected: JSX.Element;
};

type TProps = {
  amount?: number;
  colors?: TIconColor;
  onClick?(): void;
  icons: TIconType;
};

const TweetIcon: FC<TProps> = ({ icons, amount, colors }) => {
  const [selected, setSelect] = useState<boolean>(false);

  const currentAmount = (amount || 0) + (selected ? 1 : 0);
  const toggleTweetIcon = () => setSelect((selected) => !selected);

  return (
    <S.Container
      text={colors?.text}
      onClick={toggleTweetIcon}
      background={colors?.background}
      className={classnames({ selected })}
    >
      <S.IconContainer>
        {!selected ? icons.basic : icons.selected}
      </S.IconContainer>
      <S.Text>
        {currentAmount !== 0
          ? String(currentAmount > 99 ? "99+" : currentAmount)
          : ""}
      </S.Text>
    </S.Container>
  );
};

TweetIcon.defaultProps = {
  colors: {
    background: colors.skyblueSmooth2,
    text: colors.skyblue,
  },
};

export default memo(TweetIcon);
