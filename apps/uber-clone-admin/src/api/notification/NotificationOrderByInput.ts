import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  readStatus?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
