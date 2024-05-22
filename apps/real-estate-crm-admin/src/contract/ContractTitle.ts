import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "approvedBy";

export const ContractTitle = (record: TContract): string => {
  return record.approvedBy?.toString() || String(record.id);
};
