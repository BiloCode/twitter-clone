import { FC } from "react";
import faker from "faker";
import * as S from "./styles";

import UserAvatar from "../../molecules/UserAvatar";

import { colors } from "config/colors";
import { AiOutlineRetweet } from "react-icons/ai";
import { BsBellFill, BsFillHeartFill, BsFillPersonFill } from "react-icons/bs";

export type NotificationType = "liked" | "retweet" | "follow" | "default";
export type NotificationProps = {
  type?: NotificationType;
};

const Notification: FC<NotificationProps> = ({ type }) => {
  const GetIcon = (size: number = 24) => {
    switch (type) {
      case "follow":
        return <BsFillPersonFill size={size} color={colors.skyblue} />;
      case "liked":
        return <BsFillHeartFill size={size} color={colors.red} />;
      case "retweet":
        return <AiOutlineRetweet size={size} color={colors.green} />;
      default:
        return <BsBellFill size={size} color={colors.skyblue} />;
    }
  };

  return (
    <S.Container>
      <S.IconContainer>{GetIcon()}</S.IconContainer>
      <S.NotificationContent>
        <S.UserAvatars>
          <UserAvatar imageSize="small" image={faker.random.image()} />
          <UserAvatar imageSize="small" image={faker.random.image()} />
          <UserAvatar imageSize="small" image={faker.random.image()} />
        </S.UserAvatars>
        <S.NotificationText>
          <S.Title>
            <span>Escuela de Juegos</span> Retwiteo
          </S.Title>
          <S.Description>
            Hace un par de semanas realize un proyecto web y este es el resultado,
            gracias por comentar nuevamente.
          </S.Description>
        </S.NotificationText>
      </S.NotificationContent>
    </S.Container>
  );
};

Notification.defaultProps = {
  type: "default",
};

export default Notification;
