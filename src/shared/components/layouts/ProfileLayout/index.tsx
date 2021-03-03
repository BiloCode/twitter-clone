import React, { FC } from "react";
import { RouteComponentProps } from "@reach/router";
import * as S from "./styles";

import { useStore } from "effector-react";
import currentAccountSelector from "store/accounts/selectors/currentAccountSelector";

import StatusBar from "shared/components/layouts/StatusBar";
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
      <S.Container>
        <StatusBar.Push
          title={current_account?.personalInformation.nickname!}
          subtitle={"15 Tweets"}
        />
        <UserProfileDesign.Extend twitterUser={current_account} />
        <TabLayout
          tabs={ProfileTabs(current_account?.personalInformation.username!)}
        />
        {children}
      </S.Container>
    </DesignColumns>
  );
};

export default Profile;