import { IconType } from 'react-icons/lib';

import Text from '@atoms/Text';
import Title from '@atoms/Title';
import HoverableIcon from '@atoms/HoverableIcon';
import * as S from './styles';

type IProps = {
  title: string;
  subtitle?: string;
  icon?: IconType;
};

const TitleBarSimple = ({ title, icon, subtitle }: IProps) => (
  <S.Container>
    <S.TextContainer>
      <Title type="black">{title}</Title>
      {subtitle && <Text size="e-small">{subtitle}</Text>}
    </S.TextContainer>
    {icon && <HoverableIcon icon={icon} />}
  </S.Container>
);

export default TitleBarSimple;
