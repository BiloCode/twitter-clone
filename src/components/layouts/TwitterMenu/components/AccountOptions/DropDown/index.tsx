import React, { FC, memo } from 'react';

import ShadedContainer from 'components/common/ShadedContainer';
import Item from './Item';
import AccountItem from './AccountItem';

interface IProps {
  onClose?() : void;
}

const accountList = [
  {
    notifications : 0,
    user : {
      image : 'https://www.elcomercio.com/files/og_thumbnail/uploads/2020/07/27/5f1f38a4e0fab.gif',
      nickname : 'TheBilo16',
      username : '@TBilo16'
    }
  },
  {
    notifications : 5,
    user : {
      image : 'https://tvazteca.brightspotcdn.com/f2/f0/3a4f0d4c4ebe80ada7d68a8e1f64/bugs.JPG',
      nickname : 'Billy Alexander Paredes Aycho',
      username : '@AychoBilly'
    }
  }
]

const DropDown : FC<IProps> = () => (
  <ShadedContainer>
    <>
      {
        accountList.map((v,i) => (
          <AccountItem
            notifications={v.notifications}
            user={v.user}
            isAuthenticated={i === 0}
          />
        ))
      }
    </>
    <Item text='Add a new exists account' />  
    <Item text='Manage accounts' />
    <Item text='Logout' />
  </ShadedContainer>
);

export default memo(DropDown);