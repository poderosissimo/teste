import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  id: string;
  message: string | null;
  readStatus: boolean | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
