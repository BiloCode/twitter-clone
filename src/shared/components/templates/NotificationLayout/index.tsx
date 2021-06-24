import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import { HiOutlineCog } from "react-icons/hi";

import DesignColumns from "shared/components/templates/DesignColumns";
import TitleBarSimple from "shared/components/molecules/TitleBarSimple";
import NotificationTabLayout, { ITab } from "shared/components/molecules/TabLayout";

const tabs: ITab[] = [
  {
    title: "All",
    link: "/notifications",
  },
  {
    title: "Mentions",
    link: "/notifications/mentions",
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
