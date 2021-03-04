import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

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
    <div>
      <TitleBar.Simple
        activeBorder={false}
        title="Notifications"
        icon={<HiOutlineCog />}
      />
      <NotificationTabLayout tabs={tabs} />
    </div>
    {children}
  </DesignColumns>
);

export default NotificationsLayout;
