import { Feed } from "../feed/Feed";
import { Friend } from "../friend/Friend";
import { Like } from "../like/Like";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  feeds?: Array<Feed>;
  friends?: Array<Friend>;
  id: string;
  likes?: Array<Like>;
  notifications?: Array<Notification>;
  password: string | null;
  profilePicture: JsonValue;
  updatedAt: Date;
  username: string | null;
};
