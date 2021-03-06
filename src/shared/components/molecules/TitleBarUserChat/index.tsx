import * as S from "./styles";

import { VscMegaphone } from "react-icons/vsc";

import Text from "shared/components/atoms/Text";
import Title from "shared/components/atoms/Title";
import UserAvatar from "shared/components/atoms/UserAvatar";
import HoverableIcon from "shared/components/atoms/HoverableIcon";

const TitleBarUserChat = () => (
  <S.MainContainer>
    <S.UserDataContainer>
      <UserAvatar imageSize="small" />
      <S.Names>
        <Title type="black-small">Jhony Vega</Title>
        <Text size="small">@bot_kun</Text>
      </S.Names>
    </S.UserDataContainer>
    <HoverableIcon icon={VscMegaphone} />
  </S.MainContainer>
);

export default TitleBarUserChat;
