import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  content?: string | null;
  isRead?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
