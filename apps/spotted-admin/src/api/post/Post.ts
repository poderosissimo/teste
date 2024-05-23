import { Comment } from "../comment/Comment";
import { Feed } from "../feed/Feed";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type Post = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  feed?: Feed | null;
  id: string;
  likes?: Array<Like>;
  media: JsonValue;
  updatedAt: Date;
};
