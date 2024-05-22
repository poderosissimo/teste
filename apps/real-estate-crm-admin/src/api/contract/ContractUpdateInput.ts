export type ContractUpdateInput = {
  approvalRequired?: boolean | null;
  approvedBy?: string | null;
  renewalAlertDate?: Date | null;
  validationStatus?: "Option1" | null;
};
