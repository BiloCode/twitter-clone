import { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import { HiOutlineCog } from "react-icons/hi";

import DesignColumns from "shared/components/layouts/DesignColumns";
import TitleBar from "shared/components/layouts/TitleBar";
import NotificationTabLayout, {
  ITab,
} from "shared/components/layouts/TabLayout";

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
      <TitleBar.Simple
        title="Notifications"
        icon={<HiOutlineCog />}
        styles={{ activeBorder: false }}
      />
      <NotificationTabLayout tabs={tabs} />
    </S.NavigationSticky>
    {children}
  </DesignColumns>
);

export default NotificationsLayout;
