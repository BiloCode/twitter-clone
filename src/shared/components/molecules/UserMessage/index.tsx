import * as S from "./styles";

import Text from "shared/components/atoms/Text";
import HoverableIcon from "shared/components/atoms/HoverableIcon";

import { BsThreeDots } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import classNames from "classnames";

type TProps = {
  message: string;
  userAuthenticated?: boolean;
};

const UserMessage = ({ userAuthenticated, message }: TProps) => (
  <S.MainContainer className={classNames({ "user-auth": userAuthenticated })}>
    <S.TextContainer>
      <Text>{message}</Text>
    </S.TextContainer>
    <S.IconsContainer>
      <HoverableIcon>
        <RiHeartAddLine />
      </HoverableIcon>
      <HoverableIcon>
        <BsThreeDots />
      </HoverableIcon>
    </S.IconsContainer>
  </S.MainContainer>
);

export default UserMessage;
