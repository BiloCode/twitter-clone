import React from "react";
import { Router } from "@reach/router";

//Menu
import RootLayout from "shared/components/layouts/RootLayout";

//Containers
import Home from "containers/Home";
import Default from "containers/Default";
import NotificationLayout from "shared/components/layouts/NotificationLayout";
import Explore from "containers/Explore";
import Saves from "containers/Saves";
import Messages from "containers/Messages";
import ProfileLayout from "shared/components/layouts/ProfileLayout";
import Lists from "containers/Lists";
import Mentions from "containers/Mentions";
import Notifications from "containers/Notifications";
import Tweets from "containers/Tweets";

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
      <Lists path=":username/lists" />
      <ProfileLayout path=":username">
        <Tweets path="/" />
      </ProfileLayout>
      <Default default />
    </RootLayout>
  </Router>
);

export default DefaultRouter;
