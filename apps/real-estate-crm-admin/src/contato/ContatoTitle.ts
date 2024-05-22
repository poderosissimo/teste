import { Contato as TContato } from "../api/contato/Contato";

export const CONTATO_TITLE_FIELD = "id";

export const ContatoTitle = (record: TContato): string => {
  return record.id?.toString() || String(record.id);
};
