import { Post } from "../post/Post";
import { User } from "../user/User";

export type Like = {
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
  user?: User | null;
};
