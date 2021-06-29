import { FC, memo } from 'react';
import { IconType } from 'react-icons/lib';

import Icon from '@atoms/Icon';
import Text from '@atoms/Text';
import * as Styled from './styles';

interface IProps {
  icon: IconType;
  text: string;
}

const TextWithIcon: FC<IProps> = ({ icon, text }) => (
  <Styled.Container>
    <Icon size="s-medium" type={icon} />
    <Text>{text}</Text>
  </Styled.Container>
);

export default memo(TextWithIcon);
