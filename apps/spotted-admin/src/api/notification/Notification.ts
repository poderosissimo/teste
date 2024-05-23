import { User } from "../user/User";

export type Notification = {
  content: string | null;
  createdAt: Date;
  id: string;
  isRead: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
