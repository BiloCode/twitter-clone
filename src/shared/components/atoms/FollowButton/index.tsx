import { FC, useState } from 'react';

import TwitterButton from '@atoms/TwitterButton';
import Follower from './Follower';

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
