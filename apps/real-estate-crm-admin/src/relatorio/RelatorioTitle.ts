import { Relatorio as TRelatorio } from "../api/relatorio/Relatorio";

export const RELATORIO_TITLE_FIELD = "id";

export const RelatorioTitle = (record: TRelatorio): string => {
  return record.id?.toString() || String(record.id);
};
