import { useState } from "react";
import classNames from "classnames";
import * as S from "./styles";

import TitleBarPush from "shared/components/molecules/TitleBarPush";
import UserSearchChat from "shared/components/organisms/UserSearchChat";
import UserChatConversation from "shared/components/organisms/UserChatConversation";

import { AiOutlineMail } from "react-icons/ai";
import { BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

const UserMessageFloat = () => {
  const [currentChat, setCurrentChat] = useState(0);
  const [hidden, setHidden] = useState<boolean>(true);

  const onClickSlideUp = () => setHidden((state) => !state);

  return (
    <S.MainContainer className={classNames({ hidden })}>
      {!currentChat && (
        <S.TitleContainer>
          <TitleBarPush
            title="Messages"
            icons={[
              { element: AiOutlineMail },
              {
                onClick: onClickSlideUp,
                element: hidden ? BsChevronDoubleUp : BsChevronDoubleDown,
              },
            ]}
          />
        </S.TitleContainer>
      )}
      <div>
        {currentChat ? (
          <UserChatConversation floating />
        ) : (
          <UserSearchChat floating />
        )}
      </div>
    </S.MainContainer>
  );
};

export default UserMessageFloat;
