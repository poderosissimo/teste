import { Aprovacao as TAprovacao } from "../api/aprovacao/Aprovacao";

export const APROVACAO_TITLE_FIELD = "id";

export const AprovacaoTitle = (record: TAprovacao): string => {
  return record.id?.toString() || String(record.id);
};
