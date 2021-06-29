import { Router } from '@reach/router';

// Menu
import RootLayout from '@templates/RootLayout';
import NotificationLayout from '@templates/NotificationLayout';
import ProfileLayout from '@templates/ProfileLayout';

// Containers
import Home from '@pages/Home';
import Default from '@pages/Default';
import Explore from '@pages/Explore';
import Saves from '@pages/Saves';
import Messages from '@pages/Messages';
import Lists from '@pages/Lists';
import Mentions from '@pages/Mentions';
import Notifications from '@pages/Notifications';
import Tweets from '@pages/Tweets';

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
