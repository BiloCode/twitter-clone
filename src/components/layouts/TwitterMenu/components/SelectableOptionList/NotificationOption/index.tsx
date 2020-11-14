import React, { FC, memo } from 'react';
import * as Styled from './styles';
import { AiOutlineBell } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';
import useLinkNavigate from 'hooks/useLinkNavigate';

interface IProps {
  notifications? : number;
}

const NotificationOption : FC<IProps> = ({ notifications }) => {
  const Navigate = useLinkNavigate();

  return <SelectableOption text='Notifications' onClick={Navigate('/notifications')} >
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