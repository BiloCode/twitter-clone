import faker from "faker";
import * as S from "./styles";

import FollowButton from "shared/components/common/FollowButton";
import UserBasicData from "shared/components/common/UserBasicData";
import TouchableText from "shared/components/common/TouchableText";
import TitleBar from "shared/components/layouts/TitleBar";

const users = new Array(3).fill("");

const UserRecomendations = () => (
  <div>
    <TitleBar.Simple title="Who to follow" styles={{ padding: "1em 1.5em" }} />
    <S.ContainerUsers>
      {users.map((v, i) => (
        <S.UserRecomendated key={i}>
          <UserBasicData
            imageSize={48}
            image={faker.random.image()}
            nickname={faker.name.firstName()}
            username={faker.name.lastName()}
          >
            <FollowButton isFollow={false} />
          </UserBasicData>
        </S.UserRecomendated>
      ))}
      <TouchableText text="Show More" />
    </S.ContainerUsers>
  </div>
);

export default UserRecomendations;
