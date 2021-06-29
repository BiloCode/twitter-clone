import Text from '@atoms/Text';
import HoverableIcon from '@atoms/HoverableIcon';

import { BsThreeDots } from 'react-icons/bs';
import { RiHeartAddLine } from 'react-icons/ri';
import classNames from 'classnames';
import * as S from './styles';

type TProps = {
  message: string;
  userAuthenticated?: boolean;
};

const UserMessage = ({ userAuthenticated, message }: TProps) => (
  <S.MainContainer className={classNames({ 'user-auth': userAuthenticated })}>
    <S.TextContainer>
      <Text>{message}</Text>
    </S.TextContainer>
    <S.IconsContainer>
      <HoverableIcon
        icon={RiHeartAddLine}
        color={!userAuthenticated ? 'light' : 'default'}
      />
      <HoverableIcon
        icon={BsThreeDots}
        color={!userAuthenticated ? 'light' : 'default'}
      />
    </S.IconsContainer>
  </S.MainContainer>
);

export default UserMessage;
