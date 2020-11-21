import React, { FC, memo } from 'react';
import * as Styled from './styles';

import ShadedContainer from 'components/common/ShadedContainer';
import Item from './Item';
import AccountItem from './AccountItem';
import { useRecoilValue } from 'recoil';
import { AccountState , CurrentAccountSelector } from 'atoms/AccountState';
import { SelectedAccountState } from 'atoms/SelectedAccountState';

interface IProps {
  onClose?() : void;
}

const DropDown : FC<IProps> = () => {
  const Accounts = useRecoilValue(AccountState);
  const CurrentAccount = useRecoilValue(CurrentAccountSelector);
  const SelectedAccount = useRecoilValue(SelectedAccountState);

  return <Styled.RootContainer>
    <ShadedContainer>
      <Styled.Container>
        {
          Accounts.map((v,i) => (
            <AccountItem
              key={v._id}
              notifications={v.notifications}
              isAuthenticated={v._id === SelectedAccount}
              user={{
                image : v.personalInformation.profileImage,
                nickname : v.personalInformation.nickname,
                username : v.personalInformation.username
              }}
            />
          ))
        }
        <Item text='Add a new exists account' />  
        {  Accounts.length > 1 && <Item text='Manage accounts' />  }
        <Item text={`Log out @${CurrentAccount?.personalInformation.username}`} />
      </Styled.Container>
    </ShadedContainer>
  </Styled.RootContainer>
};

export default memo(DropDown);