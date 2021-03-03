import * as S from "./styles";

import FollowButton from "shared/components/common/FollowButton";
import UserBasicData from "shared/components/common/UserBasicData";

const users = new Array(3).fill("");

const UserRecomendations = () => (
  <div>
    <S.Title>A quien seguir</S.Title>
    <S.ContainerUsers>
      {users.map((v, i) => (
        <S.UserRecomendated key={i}>
          <UserBasicData
            username="Manuel"
            nickname="Diablillo"
            image="https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"
            imageSize={48}
          >
            <FollowButton isFollow={false} />
          </UserBasicData>
        </S.UserRecomendated>
      ))}
    </S.ContainerUsers>
  </div>
);

export default UserRecomendations;
