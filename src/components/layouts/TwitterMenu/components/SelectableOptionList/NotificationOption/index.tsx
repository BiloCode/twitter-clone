import React, { FC } from 'react';
import * as Styled from './styles';
import { AiOutlineBell } from 'react-icons/ai';

import SelectableOption from '../SelectableOption';

interface IProps {
  notifications? : number;
}

const NotificationOption : FC<IProps> = ({ notifications }) => (
  <SelectableOption text='Notifications' >
    <AiOutlineBell />
    {
      notifications ? (
        <Styled.IndicatorContainer>
          {notifications}
        </Styled.IndicatorContainer>
      ) : null
    }
  </SelectableOption>
);

export default NotificationOption;