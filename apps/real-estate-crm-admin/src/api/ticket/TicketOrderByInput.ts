import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
