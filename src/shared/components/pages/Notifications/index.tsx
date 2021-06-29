import { FC, useEffect, useState } from 'react';
import { RouteComponentProps } from '@reach/router';

import { Spinner } from '@atoms/Spinner';
import Notification from '@molecules/Notification';
import * as S from './style';

const Notifications: FC<RouteComponentProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const delayTime = 1;

  useEffect(() => {
    setTimeout(() => setIsLoading(() => false), delayTime * 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <S.SpinnerContainer>
          <Spinner size={24} borderSize={3} />
        </S.SpinnerContainer>
      ) : (
        <>
          <Notification type="default" />
          <Notification type="liked" />
          <Notification type="retweet" />
          <Notification type="follow" />
        </>
      )}
    </div>
  );
};

export default Notifications;
