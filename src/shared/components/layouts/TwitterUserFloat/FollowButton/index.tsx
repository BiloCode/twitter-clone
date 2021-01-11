import React, { FC, useState } from 'react';
import Follow from './Follow';
import Follower from './Follower';

interface IProps {
  isFollow : boolean;
}

const FollowButton : FC<IProps> = ({ isFollow }) => {
  const [ follow , setFollow ] = useState<boolean>(isFollow);
  const ChangeStateFollow = () => {
    setFollow(f => !f);
  }

  return <>
    {
      !follow ? 
        <Follower onClick={ChangeStateFollow} /> :
        <Follow onClick={ChangeStateFollow} />
    }
  </>
};

export default FollowButton;