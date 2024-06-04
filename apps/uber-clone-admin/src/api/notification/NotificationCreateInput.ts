import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  readStatus?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
