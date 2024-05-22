import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  providerId?: SortOrder;
  rating?: SortOrder;
  serviceBookingId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
