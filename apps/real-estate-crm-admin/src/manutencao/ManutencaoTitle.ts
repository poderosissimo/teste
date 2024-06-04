import { Manutencao as TManutencao } from "../api/manutencao/Manutencao";

export const MANUTENCAO_TITLE_FIELD = "id";

export const ManutencaoTitle = (record: TManutencao): string => {
  return record.id?.toString() || String(record.id);
};
