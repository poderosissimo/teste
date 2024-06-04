import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "source";

export const LeadTitle = (record: TLead): string => {
  return record.source?.toString() || String(record.id);
};
