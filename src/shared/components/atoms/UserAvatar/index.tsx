import classNames from 'classnames';
import Image from '@atoms/Image';
import * as Styled from './styles';

type AvatarSize = 'e-small' | 'small' | 'big' | 'e-big' | 'ee-big' | 'default';
type Props = {
  image?: string;
  imageSize?: AvatarSize;
  hoverable?: boolean;
  onClick?(): void;
  onMouseEnter?(): void;
  onMouseLeave?(): void;
};

const UserAvatar = ({
  image,
  onClick,
  hoverable,
  imageSize,
  onMouseEnter,
  onMouseLeave,
}: Props) => (
  <Styled.Container
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={classNames({
      hoverable,
      big: imageSize === 'big',
      small: imageSize === 'small',
      'e-small': imageSize === 'e-small',
      'e-big': imageSize === 'e-big',
      'ee-big': imageSize === 'ee-big',
    })}
  >
    {image && <Image src={image} />}
  </Styled.Container>
);

export default UserAvatar;
