import { Documento as TDocumento } from "../api/documento/Documento";

export const DOCUMENTO_TITLE_FIELD = "id";

export const DocumentoTitle = (record: TDocumento): string => {
  return record.id?.toString() || String(record.id);
};
