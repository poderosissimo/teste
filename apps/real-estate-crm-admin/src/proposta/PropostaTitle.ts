import { Proposta as TProposta } from "../api/proposta/Proposta";

export const PROPOSTA_TITLE_FIELD = "id";

export const PropostaTitle = (record: TProposta): string => {
  return record.id?.toString() || String(record.id);
};
