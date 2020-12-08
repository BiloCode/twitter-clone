import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';

import ArrowDown from './ArrowDown';
import UserBasicData from 'components/common/UserBasicData';
import DropDown from './DropDown';
import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector, HaveNotificationsSelector } from 'atoms/AccountState';

const AccountOptions : FC = () => {
  const Account = useRecoilValue(CurrentAccountSelector);
  const isHaveNotifications = useRecoilValue(HaveNotificationsSelector);
  const [ isDropdownHide , setIsDropdownHide ] = useState<boolean>(false);

  return <Styled.Container>
    <UserBasicData
      image={Account?.personalInformation.profileImage!}
      username={Account?.personalInformation.username!}
      nickname={Account?.personalInformation.nickname!}
      onClick={() => setIsDropdownHide(isHide => !isHide)}
    >
      <ArrowDown showIndicator={isHaveNotifications} />
    </UserBasicData>
    { isDropdownHide && <DropDown /> }
  </Styled.Container>
};

export default memo(AccountOptions);