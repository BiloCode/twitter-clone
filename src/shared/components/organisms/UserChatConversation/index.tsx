import faker from "faker";
import classNames from "classnames";
import * as S from "./styles";

import { BiCalendar } from "react-icons/bi";
import { BsFillImageFill, BsChevronDoubleDown } from "react-icons/bs";
import { AiOutlineGif, AiOutlineSend } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { VscMegaphone } from "react-icons/vsc";

import Text from "@atoms/Text";
import TextWithIcon from "@molecules/TextWithIcon";
import UserAllNames from "@molecules/UserAllNames";
import UserFollowSection from "@molecules/UserFollowSection";
import TitleBarUserChat from "@molecules/TitleBarUserChat";
import UserMessageList from "@molecules/UserMessageList";
import IconWithIcon from "@molecules/InputWithIcon";
import HoverableIcon from "@atoms/HoverableIcon";
import StickyContainer from "@atoms/StickyContainer";

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
  <S.MainContainer className={classNames({ floating })}>
    <StickyContainer>
      <TitleBarUserChat icon={floating ? BsChevronDoubleDown : VscMegaphone} />
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
