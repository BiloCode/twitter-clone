import React, { FC, memo } from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import * as Styled from './styles';

interface IProps {
  notifications? : number;
}

const NotificationContent : FC<IProps> = ({ notifications }) => (
  <>
    <AiOutlineBell />
    {
      notifications ? (
        <Styled.IndicatorContainer>
          {notifications}
        </Styled.IndicatorContainer>
      ) : null
    }
  </>
);

export default memo(NotificationContent);
