import { Projeto as TProjeto } from "../api/projeto/Projeto";

export const PROJETO_TITLE_FIELD = "id";

export const ProjetoTitle = (record: TProjeto): string => {
  return record.id?.toString() || String(record.id);
};
