import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  profilePicture?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
};
