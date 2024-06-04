import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  assignedTo?: SortOrder;
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  resourceType?: SortOrder;
  updatedAt?: SortOrder;
};
