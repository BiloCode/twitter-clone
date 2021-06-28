import { FC } from "react";
import { RouteComponentProps } from "@reach/router";

import { useStore } from "effector-react";
import currentAccountSelector from "@store/accounts/selectors/currentAccountSelector";

import TabLayout from "@molecules/TabLayout";
import DesignColumns from "@templates/DesignColumns";
import TitleBarPush from "@molecules/TitleBarPush";
import UserProfileExtends from "@organisms/UserProfileExtends";

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
      <TitleBarPush
        viewIconBack
        subtitle={"15 Tweets"}
        title={current_account?.personalInformation.nickname!}
      />
      <UserProfileExtends twitterUser={current_account} />
      <TabLayout
        tabs={ProfileTabs(current_account?.personalInformation.username!)}
      />
      {children}
    </DesignColumns>
  );
};

export default Profile;
