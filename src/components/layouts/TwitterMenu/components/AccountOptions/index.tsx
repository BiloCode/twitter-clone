import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';

import ArrowDown from './ArrowDown';
import UserInformation from 'components/common/UserInformation';
import DropDown from './DropDown';
import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector, HaveNotificationsSelector } from 'atoms/AccountState';

const AccountOptions : FC = () => {
  const Account = useRecoilValue(CurrentAccountSelector);
  const isHaveNotifications = useRecoilValue(HaveNotificationsSelector);
  const [ isDropdownHide , setIsDropdownHide ] = useState<boolean>(false);

  return <Styled.Container>
    <UserInformation.Basic
      image={Account?.personalInformation.profileImage!}
      username={Account?.personalInformation.username!}
      nickname={Account?.personalInformation.nickname!}
      onClick={() => setIsDropdownHide(isHide => !isHide)}
    >
      <ArrowDown showIndicator={isHaveNotifications} />
    </UserInformation.Basic>
    { isDropdownHide && <DropDown /> }
  </Styled.Container>
};

export default memo(AccountOptions);