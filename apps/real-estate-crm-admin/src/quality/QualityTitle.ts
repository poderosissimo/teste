import { Quality as TQuality } from "../api/quality/Quality";

export const QUALITY_TITLE_FIELD = "id";

export const QualityTitle = (record: TQuality): string => {
  return record.id?.toString() || String(record.id);
};
