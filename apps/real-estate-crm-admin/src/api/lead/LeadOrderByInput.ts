import { SortOrder } from "../../util/SortOrder";

export type LeadOrderByInput = {
  createdAt?: SortOrder;
  dateCaptured?: SortOrder;
  id?: SortOrder;
  potentialValue?: SortOrder;
  source?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
