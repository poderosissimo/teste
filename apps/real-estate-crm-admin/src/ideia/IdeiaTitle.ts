import { Ideia as TIdeia } from "../api/ideia/Ideia";

export const IDEIA_TITLE_FIELD = "id";

export const IdeiaTitle = (record: TIdeia): string => {
  return record.id?.toString() || String(record.id);
};
