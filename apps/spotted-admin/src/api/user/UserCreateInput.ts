import { FeedCreateNestedManyWithoutUsersInput } from "./FeedCreateNestedManyWithoutUsersInput";
import { FriendCreateNestedManyWithoutUsersInput } from "./FriendCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  feeds?: FeedCreateNestedManyWithoutUsersInput;
  friends?: FriendCreateNestedManyWithoutUsersInput;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profilePicture?: InputJsonValue;
  username?: string | null;
};
