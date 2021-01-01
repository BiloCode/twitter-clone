import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import Item from './Item';
import AccountItem from './AccountItem';

import { useStore } from 'effector-react';
import { accounts_store } from 'store/account/accounts_store';
import { AccountChange, selected_account_store } from 'store/account/selected_account_store';
import current_account_selector from 'store/account/selectors/current_account_selector';

interface IProps {
  onClose?() : void;
}

const DropDown : FC<IProps> = () => {
  const selected_account = useStore(selected_account_store);
  const user_accounts = useStore(accounts_store);
  const current_account = useStore(current_account_selector);

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