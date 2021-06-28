import faker from "faker";
import * as S from "./styles";

import { BiCalendar } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineGif, AiOutlineSend } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";

import Text from "shared/components/atoms/Text";
import TextWithIcon from "shared/components/molecules/TextWithIcon";
import UserAllNames from "shared/components/molecules/UserAllNames";
import UserFollowSection from "shared/components/molecules/UserFollowSection";
import TitleBarUserChat from "shared/components/molecules/TitleBarUserChat";
import UserMessageList from "shared/components/molecules/UserMessageList";
import IconWithIcon from "shared/components/molecules/InputWithIcon";
import HoverableIcon from "shared/components/atoms/HoverableIcon";
import StickyContainer from "shared/components/atoms/StickyContainer";

const allMessages = [
  {
    avatarURL: "",
    sendDate: new Date(),
    userAuthenticated: false,
    message: [
      "Hola que tal bro",
      "dime algo porfa",
      "ella me ama? o yo la amo a ella, aunque tambien depende de que sexo sea",
    ],
  },
  {
    avatarURL: "",
    sendDate: new Date(),
    userAuthenticated: true,
    message: [
      "Hola que tal bro",
      "dime algo porfa",
      "ella me ama? o yo la amo a ella, aunque tambien depende de que sexo sea",
    ],
  },
  {
    avatarURL: "",
    sendDate: new Date(),
    message: [
      "Hola que tal bro",
      "dime algo porfa",
      "ella me ama? o yo la amo a ella, aunque tambien depende de que sexo sea",
    ],
  },
];

type ChatProps = {
  floating?: boolean;
};

const UserChatConversation = ({ floating }: ChatProps) => (
  <S.MainContainer>
    <StickyContainer>
      <TitleBarUserChat />
    </StickyContainer>
    <S.MessagesContainer>
      <S.UserBasicProfile>
        <UserAllNames horizontal nickname="Jhony Code" username="bot_kun" />
        <Text>{faker.lorem.words(20)}</Text>
        <UserFollowSection followers={4} following={5} />
        <TextWithIcon icon={BiCalendar} text={`Se unio el 28 de Diciembre`} />
      </S.UserBasicProfile>
      <S.ListMessage>
        {allMessages.map((v, i) => (
          <UserMessageList
            key={i}
            messages={v.message}
            sendDate={v.sendDate}
            userProfileImage={v.avatarURL}
            userAuthenticated={v.userAuthenticated}
          />
        ))}
      </S.ListMessage>
    </S.MessagesContainer>
    <S.MessageInputContainer>
      <HoverableIcon icon={BsFillImageFill} />
      <HoverableIcon icon={AiOutlineGif} />
      <IconWithIcon
        placeholder="Star a new message"
        icon={{ position: "right", type: GrEmoji }}
      />
      <HoverableIcon icon={AiOutlineSend} />
    </S.MessageInputContainer>
  </S.MainContainer>
);

export default UserChatConversation;
