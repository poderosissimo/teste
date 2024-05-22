import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  availabilityStatus?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
