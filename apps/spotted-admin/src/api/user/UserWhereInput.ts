import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedListRelationFilter } from "../feed/FeedListRelationFilter";
import { FriendListRelationFilter } from "../friend/FriendListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  feeds?: FeedListRelationFilter;
  friends?: FriendListRelationFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  notifications?: NotificationListRelationFilter;
  password?: StringNullableFilter;
  profilePicture?: JsonFilter;
  username?: StringNullableFilter;
};
