import classnames from 'classnames';
import { IconType } from 'react-icons';
import * as S from './styles';

export type IconSizeType = 'small' | 's-medium' | 'medium' | 'big' | 'e-big';
export type IconProps = {
  type: IconType;
  size?: IconSizeType;
};

const Icon = ({ type: CustomIcon, size }: IconProps) => (
  <S.Container
    className={classnames({
      big: size === 'big',
      small: size === 'small',
      medium: size === 'medium',
      extra_big: size === 'e-big',
      small_medium: size === 's-medium',
    })}
  >
    <CustomIcon />
  </S.Container>
);

export default Icon;
