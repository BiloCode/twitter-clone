import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";

import TitleBar from "shared/components/layouts/TitleBar";
import DesignColumns from "shared/components/layouts/DesignColumns";
import UserProfileDesign from "shared/components/common/UserProfileDesign";
import TabLayout from "../TabLayout";

function ProfileTabs(username: string) {
  return [
    {
      title: "Tweets",
      link: `/${username}`,
    },
    {
      title: "Tweets y respuestas",
      link: `/${username}/with_replies`,
    },
    {
      title: "Fotos y videos",
      link: `/${username}/media`,
    },
    {
      title: "Me gusta",
      link: `/${username}/likes`,
    },
  ];
}

const Profile: FC<RouteComponentProps> = ({ children }) => {
  const current_account = useStore(currentAccountSelector);

  return (
    <DesignColumns>
      <TitleBar.Push
        subtitle={"15 Tweets"}
        title={current_account?.personalInformation.nickname!}
        styles={{ activeBorder: true }}
      />
      <UserProfileDesign.Extend twitterUser={current_account} />
      <TabLayout
        tabs={ProfileTabs(current_account?.personalInformation.username!)}
      />
      {children}
    </DesignColumns>
  );
};

export default Profile;
