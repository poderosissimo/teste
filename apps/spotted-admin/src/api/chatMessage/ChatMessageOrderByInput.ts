import { SortOrder } from "../../util/SortOrder";

export type ChatMessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  senderId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
