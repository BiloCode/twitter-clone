import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import UserAvatar from "shared/components/atoms/UserAvatar";
import UserMessage from "shared/components/molecules/UserMessage";
import DateFormated from "application/utils/DateFormated";
import classNames from "classnames";

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
  <S.MainContainer>
    {!userAuthenticated && <UserAvatar image={userProfileImage} />}
    <S.MessagesContainer
      className={classNames({ "right-align": userAuthenticated })}
    >
      {messages.map((v, i) => (
        <UserMessage key={i} userAuthenticated={userAuthenticated} message={v} />
      ))}
    </S.MessagesContainer>
    <div></div>
    <S.DateContainer>
      <Text size="e-small">{DateFormated.exec(sendDate)}</Text>
    </S.DateContainer>
  </S.MainContainer>
);

export default UserMessageList;
