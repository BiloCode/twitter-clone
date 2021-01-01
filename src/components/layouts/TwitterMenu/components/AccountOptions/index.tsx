import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';

import ArrowDown from './ArrowDown';
import UserBasicData from 'components/common/UserBasicData';
import DropDown from './DropDown';

import { useStore } from 'effector-react';
import currentAccountSelector from 'store/account/selectors/currentAccountSelector';
import haveNotificationSelector from 'store/account/selectors/haveNotificationSelector';

const AccountOptions : FC = () => {
  const [ is_dropdown_hide , setIsDropdownHide ] = useState<boolean>(false);
  const current_account = useStore(currentAccountSelector);
  const is_have_notification = useStore(haveNotificationSelector);

  return <Styled.Container>
    <UserBasicData
      image={current_account?.personalInformation.profileImage!}
      username={current_account?.personalInformation.username!}
      nickname={current_account?.personalInformation.nickname!}
      onClick={() => setIsDropdownHide(isHide => !isHide)}
    >
      <ArrowDown showIndicator={is_have_notification} />
    </UserBasicData>
    { is_dropdown_hide && <DropDown /> }
  </Styled.Container>
};

export default memo(AccountOptions);