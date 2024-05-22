export type Contract = {
  approvalRequired: boolean | null;
  approvedBy: string | null;
  createdAt: Date;
  id: string;
  renewalAlertDate: Date | null;
  updatedAt: Date;
  validationStatus?: "Option1" | null;
};
