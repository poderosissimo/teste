import { Innovation as TInnovation } from "../api/innovation/Innovation";

export const INNOVATION_TITLE_FIELD = "id";

export const InnovationTitle = (record: TInnovation): string => {
  return record.id?.toString() || String(record.id);
};
