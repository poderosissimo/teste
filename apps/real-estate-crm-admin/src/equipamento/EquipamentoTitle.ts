import { Equipamento as TEquipamento } from "../api/equipamento/Equipamento";

export const EQUIPAMENTO_TITLE_FIELD = "id";

export const EquipamentoTitle = (record: TEquipamento): string => {
  return record.id?.toString() || String(record.id);
};
