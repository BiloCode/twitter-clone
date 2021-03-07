import { FC, memo, useState } from "react";
import * as S from "./styles";

import classnames from "classnames";

export type TIconColor = {
  background?: string;
  text?: string;
};

export type TIconType = {
  basic: JSX.Element;
  selected: JSX.Element;
};

type TProps = {
  isMountable?: boolean;
  amount?: number;
  icons: TIconType;
  onClick?(): void;
  styles?: {
    isBig?: boolean;
    colors?: TIconColor;
  };
};

const TweetIcon: FC<TProps> = ({
  icons,
  amount,
  styles,
  isMountable,
  onClick,
}) => {
  const [selected, setSelect] = useState<boolean>(false);

  const currentAmount = (amount || 0) + (selected ? 1 : 0);
  const toggleTweetIcon = () => {
    onClick && onClick();
    isMountable && setSelect((selected) => !selected);
  };

  return (
    <S.Container
      text={styles?.colors?.text}
      onClick={toggleTweetIcon}
      background={styles?.colors?.background}
      className={classnames({ selected, big: styles?.isBig })}
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
  isMountable: true,
};

export default memo(TweetIcon);
