import React from "react";
import { Router } from "@reach/router";

//Menu
import RootLayout from "shared/components/layouts/RootLayout";

//Containers
import Home from "shared/components/pages/Home";
import Default from "shared/components/pages/Default";
import NotificationLayout from "shared/components/layouts/NotificationLayout";
import Explore from "shared/components/pages/Explore";
import Saves from "shared/components/pages/Saves";
import Messages from "shared/components/pages/Messages";
import ProfileLayout from "shared/components/layouts/ProfileLayout";
import Lists from "shared/components/pages/Lists";
import Mentions from "shared/components/pages/Mentions";
import Notifications from "shared/components/pages/Notifications";
import Tweets from "shared/components/pages/Tweets";

const DefaultRouter = () => (
  <Router>
    <RootLayout path="/">
      <Home path="home" />
      <Explore path="explore" />
      <NotificationLayout path="notifications">
        <Notifications path="/" />
        <Mentions path="/mentions" />
      </NotificationLayout>
      <Saves path="i/bookmarks" />
      <Messages path="messages" />
      <Lists path="lists" />
      <ProfileLayout path=":username">
        <Tweets path="/" />
      </ProfileLayout>
      <Default default />
    </RootLayout>
  </Router>
);

export default DefaultRouter;
