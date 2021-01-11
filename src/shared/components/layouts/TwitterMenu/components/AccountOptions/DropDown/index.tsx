import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'shared/components/common/ShadedContainer';
import Item from './Item';
import AccountItem from './AccountItem';

import { useStore } from 'effector-react';
import { accountsStore } from 'store/accounts';
import { AccountChange, selectedAccountStore } from 'store/account_selected';
import currentAccountSelector from 'store/accounts/selectors/currentAccountSelector';

interface IProps {
  onClose?() : void;
}

const DropDown : FC<IProps> = () => {
  const selected_account = useStore(selectedAccountStore);
  const user_accounts = useStore(accountsStore);
  const current_account = useStore(currentAccountSelector);

  return <Styled.RootContainer>
    <ShadedContainer>
      <Styled.Container>
        {
          user_accounts.map((v,i) => (
            <AccountItem
              key={v._id}
              notifications={v.notifications}
              isAuthenticated={v._id === selected_account}
              user={{
                image : v.personalInformation.profileImage,
                nickname : v.personalInformation.nickname,
                username : v.personalInformation.username
              }}
              onClick={() => AccountChange(v._id)}
            />
          ))
        }
        <Item text='Add a new exists account' />  
        {  user_accounts.length > 1 && <Item text='Manage accounts' />  }
        <Item text={`Log out @${current_account?.personalInformation.username}`} />
      </Styled.Container>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(DropDown);