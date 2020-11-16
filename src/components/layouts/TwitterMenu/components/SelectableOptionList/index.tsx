import React, { memo } from 'react';
import { FiTwitter } from 'react-icons/fi';
import { BsBookmark , BsFileText } from 'react-icons/bs'
import { AiOutlineInbox , AiOutlineNumber , AiOutlineUser } from 'react-icons/ai';

import SelectableOption from './SelectableOption';
import NotificationOption from './NotificationOption';
import HomeOption from './HomeOption';

import { useRecoilValue } from 'recoil';
import { CurrentAccountSelector } from 'atoms/AccountState';
import MoreOptions from './MoreOptions';
import useLinkNavigate from 'hooks/useLinkNavigate';

const SelectableOptionList = () => {
  const CurrentAccount = useRecoilValue(CurrentAccountSelector);
  const Navigate = useLinkNavigate();

  return <div>
    <SelectableOption onClick={Navigate('/home')} >
      <FiTwitter />
    </SelectableOption>
    <HomeOption />   
    <SelectableOption text='Explore' onClick={Navigate('/explore')}>
      <AiOutlineNumber />
    </SelectableOption>
    <NotificationOption notifications={CurrentAccount?.notifications} />
    <SelectableOption text='Messages' onClick={Navigate('/messages')}>
      <AiOutlineInbox />
    </SelectableOption>
    <SelectableOption text='Saves' onClick={Navigate('/i/bookmarks')}>
      <BsBookmark />
    </SelectableOption>
    <SelectableOption text='Lists' onClick={Navigate(`/${CurrentAccount?.personalInformation.username}/lists`)}>
      <BsFileText />
    </SelectableOption>
    <SelectableOption text='Profile' onClick={Navigate(`/${CurrentAccount?.personalInformation.username}`)}>
      <AiOutlineUser />
    </SelectableOption>
    <MoreOptions />
  </div>
};

export default memo(SelectableOptionList);