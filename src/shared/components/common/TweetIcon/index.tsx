import { FC, memo } from 'react';
import * as S from './styles';

import classnames from 'classnames';
import { colors } from 'config/colors';

export type TIconColor = {
  background? : string;
  text? : string;
}

export type TIconType = {
  basic : JSX.Element;
  selected : JSX.Element;
}

type TProps = {
  id : number;
  amount? : number;
  colors? : TIconColor;
  onClick?(id : number) : void;
  icons : TIconType;
  selected? : boolean;
}

const TweetIcon : FC<TProps> = ({ id, icons, amount, onClick, selected, colors }) => {
  const toggleTweetIcon = () => onClick && onClick(id);
  const currentAmount = (amount || 0) + (selected ? 1 : 0);

  return <S.Container
    text={colors?.text}
    onClick={toggleTweetIcon}
    background={colors?.background}
    className={classnames({ selected })}
  >
    <S.IconContainer>{!selected ? icons.basic : icons.selected}</S.IconContainer>
    <S.Text>
      { currentAmount !== 0 ? String(currentAmount > 99 ? "99+" : currentAmount) : ""}
    </S.Text>
  </S.Container>
};

TweetIcon.defaultProps = {
  colors : {
    background : colors.skyblueSmooth2,
    text : colors.skyblue
  }
}

export default memo(TweetIcon, (prev, next) => prev.selected === next.selected);