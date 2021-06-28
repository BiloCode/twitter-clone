import faker from "faker";
import * as S from "./styles";

import FollowButton from "@atoms/FollowButton";
import UserBasicData from "@templates/UserBasicData";
import HoverableText from "@atoms/HoverableText";
import TitleBarSimple from "@molecules/TitleBarSimple";

const users = new Array(3).fill("");

const UserRecomendations = () => (
  <div>
    <TitleBarSimple title="Who to follow" />
    <S.ContainerUsers>
      {users.map((v, i) => (
        <S.UserRecomendated key={i}>
          <UserBasicData
            image={faker.random.image()}
            nickname={faker.name.firstName()}
            username={faker.name.lastName()}
          >
            <FollowButton isFollow={false} />
          </UserBasicData>
        </S.UserRecomendated>
      ))}
      <HoverableText text="Show More" />
    </S.ContainerUsers>
  </div>
);

export default UserRecomendations;
