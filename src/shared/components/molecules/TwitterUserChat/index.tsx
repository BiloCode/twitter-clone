import classNames from "classnames";
import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import UserAvatar from "shared/components/atoms/UserAvatar";
import UserAllNames from "shared/components/molecules/UserAllNames";

type TProps = {
  select?: boolean;
  onClick?(): void;
  chat: {
    message: string;
    lastUpdated: Date;
  };
  user: {
    nickname: string;
    avatarUrl: string;
    username: string;
  };
};

const TwitterUserChat = ({ select, user, chat, onClick }: TProps) => {
  const dateFormated = Intl.DateTimeFormat("es-ES").format(chat.lastUpdated);

  return (
    <S.MainContainer onClick={onClick} className={classNames({ select })}>
      <UserAvatar image={user.avatarUrl} />
      <S.TextContainer>
        <S.TopContent>
          <UserAllNames
            horizontal
            nickname={user.nickname}
            username={user.username}
          />
          <Text size="small">{dateFormated}</Text>
        </S.TopContent>
        <Text>{chat.message}</Text>
      </S.TextContainer>
    </S.MainContainer>
  );
};

export default TwitterUserChat;
