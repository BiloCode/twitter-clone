import { IconType } from "react-icons";
import * as S from "./styles";

import Text from "@atoms/Text";
import Title from "@atoms/Title";
import UserAvatar from "@atoms/UserAvatar";
import HoverableIcon from "@atoms/HoverableIcon";

type TitleBarProps = {
  icon: IconType;
};

const TitleBarUserChat = ({ icon }: TitleBarProps) => (
  <S.MainContainer>
    <S.UserDataContainer>
      <UserAvatar imageSize="small" />
      <S.Names>
        <Title type="black-small">Jhony Vega</Title>
        <Text size="small">@bot_kun</Text>
      </S.Names>
    </S.UserDataContainer>
    <HoverableIcon icon={icon} />
  </S.MainContainer>
);

export default TitleBarUserChat;
