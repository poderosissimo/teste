import { Following as TFollowing } from "../api/following/Following";

export const FOLLOWING_TITLE_FIELD = "follower";

export const FollowingTitle = (record: TFollowing): string => {
  return record.follower?.toString() || String(record.id);
};
