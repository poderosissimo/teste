import { FeedUpdateManyWithoutUsersInput } from "./FeedUpdateManyWithoutUsersInput";
import { FriendUpdateManyWithoutUsersInput } from "./FriendUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  email?: string | null;
  feeds?: FeedUpdateManyWithoutUsersInput;
  friends?: FriendUpdateManyWithoutUsersInput;
  likes?: LikeUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  username?: string | null;
};
