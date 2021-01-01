import React, { FC, memo, useState } from 'react';
import * as Styled from './styles';

import ArrowDown from './ArrowDown';
import UserBasicData from 'components/common/UserBasicData';
import DropDown from './DropDown';

import { useStore } from 'effector-react';
import current_account_selector from 'store/account/selectors/current_account_selector';
import have_notification_selector from 'store/account/selectors/have_notification_selector';

const AccountOptions : FC = () => {
  const [ is_dropdown_hide , setIsDropdownHide ] = useState<boolean>(false);
  const current_account = useStore(current_account_selector);
  const is_have_notification = useStore(have_notification_selector);

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