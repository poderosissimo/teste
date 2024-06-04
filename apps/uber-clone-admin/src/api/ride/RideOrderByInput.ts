import { SortOrder } from "../../util/SortOrder";

export type RideOrderByInput = {
  createdAt?: SortOrder;
  driverId?: SortOrder;
  dropoffLocation?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  pickupLocation?: SortOrder;
  requestTime?: SortOrder;
  riderId?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
