import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  content?: string | null;
  isRead?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
