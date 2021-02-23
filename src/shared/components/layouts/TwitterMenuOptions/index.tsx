import React, { memo } from 'react';
import { FiTwitter } from 'react-icons/fi';
import { BsBookmark , BsFileText } from 'react-icons/bs'
import { AiOutlineInbox , AiOutlineNumber , AiOutlineUser } from 'react-icons/ai';

import Option from './Option';
import HomeOption from './HomeOption';
import MoreOptions from './MoreOptions';
import NotificationOption from './NotificationContent';

import { useStore } from 'effector-react';
import currentAccountSelector from 'store/accounts/selectors/currentAccountSelector';

import useLinkNavigate from 'shared/hooks/useLinkNavigate';
import useRouteCheck from 'shared/hooks/useRouteCheck';

const SelectableOptionList = () => {
  const current_account = useStore(currentAccountSelector);
  const Navigate = useLinkNavigate();
  const RouteCheck = useRouteCheck();

  return <div>
    <Option content={<FiTwitter />} onClick={Navigate('/home')} />
    <Option
      text='Home'
      content={<HomeOption />}
      isSelect={RouteCheck('home')}
      onClick={Navigate('/home')}
    />
    <Option
      text='Explore'
      content={<AiOutlineNumber />}
      isSelect={RouteCheck('explore')}
      onClick={Navigate('/explore')}
    />
    <Option
      text='Notifications'
      content={<NotificationOption notifications={current_account?.notifications} />}
      isSelect={RouteCheck('notifications')}
      onClick={Navigate('/notifications')}
    />
    <Option
      text='Messages'
      content={<AiOutlineInbox />}
      isSelect={RouteCheck('messages')}
      onClick={Navigate('/messages')}
    />
    <Option
      text='Saves'
      content={<BsBookmark />}
      isSelect={RouteCheck('bookmarks')}
      onClick={Navigate('/i/bookmarks')}
    />
    <Option
      text='Lists'
      content={<BsFileText />}
      isSelect={RouteCheck('lists')}
      onClick={Navigate(`/${current_account?.personalInformation.username}/lists`)}
    />
    <Option
      text='Profile'
      content={<AiOutlineUser />}
      isSelect={RouteCheck(current_account?.personalInformation.username || '')}
      onClick={Navigate(`/${current_account?.personalInformation.username}`)}
    />
    <MoreOptions />
  </div>
};

export default memo(SelectableOptionList);