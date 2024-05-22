import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  providerId?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
