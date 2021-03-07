import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./style";

import { Spinner } from "shared/components/common/Spinner";

const Notifications: FC<RouteComponentProps> = () => (
  <div>
    <S.SpinnerContainer>
      <Spinner size={24} borderSize={3} />
    </S.SpinnerContainer>
  </div>
);

export default Notifications;
