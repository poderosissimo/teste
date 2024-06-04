import { Feed as TFeed } from "../api/feed/Feed";

export const FEED_TITLE_FIELD = "id";

export const FeedTitle = (record: TFeed): string => {
  return record.id?.toString() || String(record.id);
};
