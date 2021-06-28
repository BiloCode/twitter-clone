import { memo } from "react";
import faker from "faker";
import * as Styled from "./styles";

import UserAvatar from "@atoms/UserAvatar";
import Text from "@atoms/Text";

const followers = new Array(3).fill(() => faker.random.image());

const CommonFollowers = () => (
  <Styled.Container>
    <Styled.ImagesContainer>
      {followers.map((getImage, index) => (
        <Styled.ImageProfile key={index}>
          <UserAvatar image={getImage()} imageSize="e-small" />
        </Styled.ImageProfile>
      ))}
    </Styled.ImagesContainer>
    <Text size="e-small">
      carlosnoob, WithSack y 3 mas de las cuentas que sigues siguen a este usuario.
    </Text>
  </Styled.Container>
);

export default memo(CommonFollowers);
