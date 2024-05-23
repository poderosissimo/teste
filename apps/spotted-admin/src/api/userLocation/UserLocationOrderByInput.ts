import { SortOrder } from "../../util/SortOrder";

export type UserLocationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
