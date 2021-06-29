import { FC, memo } from 'react';
import Image from '@atoms/Image';
import * as Styled from './styles';

interface IProps {
  url?: string;
}

const BackgroundImage: FC<IProps> = ({ url }) => (
  <Styled.Container>
    {url && <Image src={url} alt="user-profile-image" />}
  </Styled.Container>
);

export default memo(BackgroundImage);
