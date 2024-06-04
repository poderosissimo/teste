import { Post } from "../post/Post";
import { User } from "../user/User";

export type Feed = {
  createdAt: Date;
  id: string;
  posts?: Array<Post>;
  updatedAt: Date;
  user?: User | null;
};
