import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import TitleBarPush from "@molecules/TitleBarPush";
import UserSearchChat from "@organisms/UserSearchChat";
import UserChatConversation from "@organisms/UserChatConversation";

import { HiOutlineCog } from "react-icons/hi";
import { RiMailAddLine } from "react-icons/ri";

const Messages: FC<RouteComponentProps> = () => (
  <S.MainContainer>
    <S.LeftContent>
      <TitleBarPush
        title="Messages"
        icons={[
          {
            element: HiOutlineCog,
          },
          {
            element: RiMailAddLine,
          },
        ]}
      />
      <UserSearchChat />
    </S.LeftContent>
    <UserChatConversation />
  </S.MainContainer>
);

export default Messages;
