import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendCreateNestedManyWithoutFriendsInput } from "./FriendCreateNestedManyWithoutFriendsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendCreateInput = {
  friend?: FriendWhereUniqueInput | null;
  friends?: FriendCreateNestedManyWithoutFriendsInput;
  user?: UserWhereUniqueInput | null;
};
