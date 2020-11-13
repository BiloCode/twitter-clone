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
import useNavigate from 'hooks/useNavigate';

const SelectableOptionList = () => {
  const CurrentAccount = useRecoilValue(CurrentAccountSelector);
  const Navigate = useNavigate();

  return <div>
    <SelectableOption text='' onClick={Navigate('/')} >
      <FiTwitter />
    </SelectableOption>
    <HomeOption />   
    <SelectableOption text='Explore' onClick={Navigate('/')}>
      <AiOutlineNumber />
    </SelectableOption>
    <NotificationOption notifications={CurrentAccount?.notifications} />
    <SelectableOption text='Messages' onClick={Navigate('/')}>
      <AiOutlineInbox />
    </SelectableOption>
    <SelectableOption text='Saves' onClick={Navigate('/')}>
      <BsBookmark />
    </SelectableOption>
    <SelectableOption text='Lists' onClick={Navigate('/')}>
      <BsFileText />
    </SelectableOption>
    <SelectableOption text='Profile' onClick={Navigate('/')}>
      <AiOutlineUser />
    </SelectableOption>
    <MoreOptions />
  </div>
};

export default memo(SelectableOptionList);