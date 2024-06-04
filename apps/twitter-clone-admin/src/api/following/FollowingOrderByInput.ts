import { SortOrder } from "../../util/SortOrder";

export type FollowingOrderByInput = {
  createdAt?: SortOrder;
  follower?: SortOrder;
  followingId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
