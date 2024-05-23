import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FriendRequestWhereInput = {
  id?: StringFilter;
  receiver?: StringNullableFilter;
  sender?: StringNullableFilter;
  status?: "Option1";
};
