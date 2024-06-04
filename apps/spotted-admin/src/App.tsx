import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { FeedList } from "./feed/FeedList";
import { FeedCreate } from "./feed/FeedCreate";
import { FeedEdit } from "./feed/FeedEdit";
import { FeedShow } from "./feed/FeedShow";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { FriendList } from "./friend/FriendList";
import { FriendCreate } from "./friend/FriendCreate";
import { FriendEdit } from "./friend/FriendEdit";
import { FriendShow } from "./friend/FriendShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { FriendRequestList } from "./friendRequest/FriendRequestList";
import { FriendRequestCreate } from "./friendRequest/FriendRequestCreate";
import { FriendRequestEdit } from "./friendRequest/FriendRequestEdit";
import { FriendRequestShow } from "./friendRequest/FriendRequestShow";
import { UserLocationList } from "./userLocation/UserLocationList";
import { UserLocationCreate } from "./userLocation/UserLocationCreate";
import { UserLocationEdit } from "./userLocation/UserLocationEdit";
import { UserLocationShow } from "./userLocation/UserLocationShow";
import { ChatMessageList } from "./chatMessage/ChatMessageList";
import { ChatMessageCreate } from "./chatMessage/ChatMessageCreate";
import { ChatMessageEdit } from "./chatMessage/ChatMessageEdit";
import { ChatMessageShow } from "./chatMessage/ChatMessageShow";
import { FollowList } from "./follow/FollowList";
import { FollowCreate } from "./follow/FollowCreate";
import { FollowEdit } from "./follow/FollowEdit";
import { FollowShow } from "./follow/FollowShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Spotted"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="Feed"
          list={FeedList}
          edit={FeedEdit}
          create={FeedCreate}
          show={FeedShow}
        />
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="Friend"
          list={FriendList}
          edit={FriendEdit}
          create={FriendCreate}
          show={FriendShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
        <Resource
          name="FriendRequest"
          list={FriendRequestList}
          edit={FriendRequestEdit}
          create={FriendRequestCreate}
          show={FriendRequestShow}
        />
        <Resource
          name="UserLocation"
          list={UserLocationList}
          edit={UserLocationEdit}
          create={UserLocationCreate}
          show={UserLocationShow}
        />
        <Resource
          name="ChatMessage"
          list={ChatMessageList}
          edit={ChatMessageEdit}
          create={ChatMessageCreate}
          show={ChatMessageShow}
        />
        <Resource
          name="Follow"
          list={FollowList}
          edit={FollowEdit}
          create={FollowCreate}
          show={FollowShow}
        />
      </Admin>
    </div>
  );
};

export default App;
