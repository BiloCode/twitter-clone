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
import useRouteCheck from 'hooks/useRouteCheck';

const SelectableOptionList = () => {
  const Account = useRecoilValue(CurrentAccountSelector);
  const Navigate = useLinkNavigate();
  const RouteCheck = useRouteCheck();

  return <div>
    <SelectableOption onClick={Navigate('/home')} >
      <FiTwitter />
    </SelectableOption>
    <HomeOption />   
    <SelectableOption
      text='Explore'
      isSelect={RouteCheck('explore')}
      onClick={Navigate('/explore')}
    >
      <AiOutlineNumber />
    </SelectableOption>
    <NotificationOption notifications={Account?.notifications} />
    <SelectableOption
      text='Messages'
      isSelect={RouteCheck('messages')}
      onClick={Navigate('/messages')}
    >
      <AiOutlineInbox />
    </SelectableOption>
    <SelectableOption
      text='Saves'
      isSelect={RouteCheck('bookmarks')}
      onClick={Navigate('/i/bookmarks')}
    >
      <BsBookmark />
    </SelectableOption>
    <SelectableOption
      text='Lists'
      isSelect={RouteCheck('lists')}
      onClick={Navigate(`/${Account?.personalInformation.username}/lists`)}
    >
      <BsFileText />
    </SelectableOption>
    <SelectableOption
      text='Profile'
      isSelect={RouteCheck(Account?.personalInformation.username || '')}
      onClick={Navigate(`/${Account?.personalInformation.username}`)}
    >
      <AiOutlineUser />
    </SelectableOption>
    <MoreOptions />
  </div>
};

export default memo(SelectableOptionList);