import { Risco as TRisco } from "../api/risco/Risco";

export const RISCO_TITLE_FIELD = "id";

export const RiscoTitle = (record: TRisco): string => {
  return record.id?.toString() || String(record.id);
};
