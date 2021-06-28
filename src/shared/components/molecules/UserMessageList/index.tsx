import classNames from "classnames";
import * as S from "./styles";

import Text from "@atoms/Text";
import UserAvatar from "@atoms/UserAvatar";
import UserMessage from "@molecules/UserMessage";
import DateFormated from "@application/utils/DateFormated";

type TProps = {
  sendDate: Date;
  messages: string[];
  userProfileImage: string;
  userAuthenticated?: boolean;
};

const UserMessageList = ({
  messages,
  sendDate,
  userProfileImage,
  userAuthenticated,
}: TProps) => (
  <S.MainContainer className={classNames({ "user-auth": userAuthenticated })}>
    <S.MessageWithAvatar>
      {!userAuthenticated && <UserAvatar image={userProfileImage} />}
      <S.MessagesContainer>
        {messages.map((v, i) => (
          <UserMessage key={i} userAuthenticated={userAuthenticated} message={v} />
        ))}
      </S.MessagesContainer>
    </S.MessageWithAvatar>
    <S.DateContainer>
      <Text size="e-small">{DateFormated.exec(sendDate)}</Text>
    </S.DateContainer>
  </S.MainContainer>
);

export default UserMessageList;
