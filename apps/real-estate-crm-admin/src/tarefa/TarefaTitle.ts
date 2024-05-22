import { Tarefa as TTarefa } from "../api/tarefa/Tarefa";

export const TAREFA_TITLE_FIELD = "id";

export const TarefaTitle = (record: TTarefa): string => {
  return record.id?.toString() || String(record.id);
};
