import { Contrato as TContrato } from "../api/contrato/Contrato";

export const CONTRATO_TITLE_FIELD = "id";

export const ContratoTitle = (record: TContrato): string => {
  return record.id?.toString() || String(record.id);
};
