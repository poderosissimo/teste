import { SortOrder } from "../../util/SortOrder";

export type ProviderOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  profilePicture?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
