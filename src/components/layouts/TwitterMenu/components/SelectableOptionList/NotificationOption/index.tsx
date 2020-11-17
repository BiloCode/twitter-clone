import React, { FC, memo } from 'react';
import * as Styled from './styles';
import { AiOutlineBell } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';
import useLinkNavigate from 'hooks/useLinkNavigate';
import useRouteCheck from 'hooks/useRouteCheck';

interface IProps {
  notifications? : number;
}

const NotificationOption : FC<IProps> = ({ notifications }) => {
  const Navigate = useLinkNavigate();
  const RouteCheck = useRouteCheck();

  return <SelectableOption
    text='Notifications'
    isSelect={RouteCheck('notifications')}
    onClick={Navigate('/notifications')}
  >
    <AiOutlineBell />
    {
      notifications ? (
        <Styled.IndicatorContainer>
          {notifications}
        </Styled.IndicatorContainer>
      ) : null
    }
  </SelectableOption>
};

export default memo(NotificationOption);