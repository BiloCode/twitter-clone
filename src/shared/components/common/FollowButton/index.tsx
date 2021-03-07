import { FC, useState } from "react";

import Follower from "./Follower";
import TwitterButton from "shared/components/common/TwitterButton";

type FollowManagerProps = {
  isFollow: boolean;
};

const FollowButton: FC<FollowManagerProps> = ({ isFollow }) => {
  const [follow, setFollow] = useState<boolean>(isFollow);
  const ChangeStateFollow = () => setFollow((f) => !f);

  return (
    <>
      {follow ? (
        <Follower onClick={ChangeStateFollow} />
      ) : (
        <TwitterButton onClick={ChangeStateFollow}>Follow</TwitterButton>
      )}
    </>
  );
};

export default FollowButton;
