import { memo } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { BsBookmark, BsFileText } from 'react-icons/bs';
import { AiOutlineInbox, AiOutlineNumber, AiOutlineUser } from 'react-icons/ai';

import { useStore } from 'effector-react';
import currentAccountSelector from '@store/accounts/selectors/currentAccountSelector';

import useLinkNavigate from '@hooks/useLinkNavigate';
import useRouteCheck from '@hooks/useRouteCheck';
import { colors } from '@style-config/colors';
import NotificationOption from './NotificationContent';
import MoreOptions from './MoreOptions';
import HomeOption from './HomeOption';
import Option from './Option';

const SelectableOptionList = () => {
  const current_account = useStore(currentAccountSelector);
  const Navigate = useLinkNavigate();
  const isRouteSelect = useRouteCheck();

  return (
    <div>
      <Option
        content={<FaTwitter color={colors.skyblue} />}
        onClick={Navigate('/home')}
      />
      <Option
        text="Home"
        content={<HomeOption />}
        isSelect={isRouteSelect('home')}
        onClick={Navigate('/home')}
      />
      <Option
        text="Explore"
        content={<AiOutlineNumber />}
        isSelect={isRouteSelect('explore')}
        onClick={Navigate('/explore')}
      />
      <Option
        text="Notifications"
        content={
          <NotificationOption notifications={current_account?.notifications} />
        }
        isSelect={isRouteSelect('notifications')}
        onClick={Navigate('/notifications')}
      />
      <Option
        text="Messages"
        content={<AiOutlineInbox />}
        isSelect={isRouteSelect('messages')}
        onClick={Navigate('/messages')}
      />
      <Option
        text="Saves"
        content={<BsBookmark />}
        isSelect={isRouteSelect('bookmarks')}
        onClick={Navigate('/i/bookmarks')}
      />
      <Option
        text="Lists"
        content={<BsFileText />}
        isSelect={isRouteSelect('lists')}
        onClick={Navigate('/lists')}
      />
      <Option
        text="Profile"
        content={<AiOutlineUser />}
        onClick={Navigate(`/${current_account?.personalInformation.username}`)}
        isSelect={isRouteSelect(
          current_account?.personalInformation.username || '',
        )}
      />
      <MoreOptions />
    </div>
  );
};

export default memo(SelectableOptionList);
