import { FollowingWhereUniqueInput } from "./FollowingWhereUniqueInput";
import { FollowingCreateNestedManyWithoutFollowingsInput } from "./FollowingCreateNestedManyWithoutFollowingsInput";

export type FollowingCreateInput = {
  follower?: string | null;
  following?: FollowingWhereUniqueInput | null;
  followings?: FollowingCreateNestedManyWithoutFollowingsInput;
};
