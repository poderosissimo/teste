import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowingWhereUniqueInput } from "./FollowingWhereUniqueInput";
import { FollowingListRelationFilter } from "./FollowingListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowingWhereInput = {
  follower?: StringNullableFilter;
  following?: FollowingWhereUniqueInput;
  followings?: FollowingListRelationFilter;
  id?: StringFilter;
};
