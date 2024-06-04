import { FollowingWhereUniqueInput } from "./FollowingWhereUniqueInput";
import { FollowingUpdateManyWithoutFollowingsInput } from "./FollowingUpdateManyWithoutFollowingsInput";

export type FollowingUpdateInput = {
  follower?: string | null;
  following?: FollowingWhereUniqueInput | null;
  followings?: FollowingUpdateManyWithoutFollowingsInput;
};
