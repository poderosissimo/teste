import { Inovacao as TInovacao } from "../api/inovacao/Inovacao";

export const INOVACAO_TITLE_FIELD = "id";

export const InovacaoTitle = (record: TInovacao): string => {
  return record.id?.toString() || String(record.id);
};
