import React, { FC, memo } from 'react';
import * as Styled from './styles';
import { AiOutlineBell } from 'react-icons/ai';

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