import { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

import { HiOutlineCog } from 'react-icons/hi';

import DesignColumns from '@templates/DesignColumns';
import TitleBarSimple from '@molecules/TitleBarSimple';
import NotificationTabLayout, { ITab } from '@molecules/TabLayout';
import * as S from './styles';

const tabs: ITab[] = [
  {
    title: 'All',
    link: '/notifications',
  },
  {
    title: 'Mentions',
    link: '/notifications/mentions',
  },
];

const NotificationsLayout: FC<RouteComponentProps> = ({ children }) => (
  <DesignColumns>
    <S.NavigationSticky>
      <TitleBarSimple title="Notifications" icon={HiOutlineCog} />
      <NotificationTabLayout tabs={tabs} />
    </S.NavigationSticky>
    {children}
  </DesignColumns>
);

export default NotificationsLayout;
