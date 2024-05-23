import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
