import { SortOrder } from "../../util/SortOrder";

export type RiderOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  paymentMethod?: SortOrder;
  phoneNumber?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
