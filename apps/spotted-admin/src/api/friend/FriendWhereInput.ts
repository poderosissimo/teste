import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";
import { FriendListRelationFilter } from "./FriendListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FriendWhereInput = {
  friend?: FriendWhereUniqueInput;
  friends?: FriendListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
