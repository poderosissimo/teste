import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  approvalRequired?: SortOrder;
  approvedBy?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  renewalAlertDate?: SortOrder;
  updatedAt?: SortOrder;
  validationStatus?: SortOrder;
};
