import classNames from 'classnames';
import { FC } from 'react';

import * as S from './styles';

type TitleType =
  | 'black-big'
  | 'black'
  | 'black-medium'
  | 'small'
  | 'black-small'
  | 'default';

type TitleProps = {
  type?: TitleType;
  onClick?(): void;
};

const Title: FC<TitleProps> = ({ children, onClick, type }) => (
  <S.MainText
    className={classNames({
      hoverable: !!onClick,
      small: type === 'small',
      black: type === 'black',
      'black-small': type === 'black-small',
      'black-big': type === 'black-big',
      'black-medium': type === 'black-medium',
    })}
  >
    {children}
  </S.MainText>
);

export default Title;
