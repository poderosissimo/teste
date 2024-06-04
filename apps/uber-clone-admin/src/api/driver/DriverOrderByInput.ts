import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
  vehicleType?: SortOrder;
};
