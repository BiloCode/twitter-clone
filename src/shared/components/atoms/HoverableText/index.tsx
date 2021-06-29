import { FC } from 'react';
import classnames from 'classnames';
import * as S from './styles';

type TProps = {
  text: string;
  center?: boolean;
  onClick?(): void;
};

const TouchableText: FC<TProps> = ({ text, center }) => (
  <S.Button className={classnames({ center })}>{text}</S.Button>
);

export default TouchableText;
