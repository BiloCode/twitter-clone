import { FC, memo } from 'react';

import Text from '@atoms/Text';
import Title from '@atoms/Title';
import * as Styled from './styles';

interface IProps {
  isModal?: boolean;
  nickname: string;
  username: string;
  description: string;
}

const UserProfileInformation: FC<IProps> = ({
  isModal,
  nickname,
  username,
  description,
}) => (
  <Styled.Container>
    <Styled.UserText>
      <Title type={isModal ? 'black-small' : 'black-medium'}>{nickname}</Title>
      <Text size={isModal ? 'small' : 'default'}>
        @
        {username}
      </Text>
    </Styled.UserText>
    <Styled.Description>{description}</Styled.Description>
  </Styled.Container>
);

export default memo(UserProfileInformation);
