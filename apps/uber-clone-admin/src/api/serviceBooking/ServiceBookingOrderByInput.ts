import { SortOrder } from "../../util/SortOrder";

export type ServiceBookingOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  providerId?: SortOrder;
  requestTime?: SortOrder;
  serviceType?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
