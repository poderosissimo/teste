import { EquipamentoWhereInput } from "./EquipamentoWhereInput";
import { EquipamentoOrderByInput } from "./EquipamentoOrderByInput";

export type EquipamentoFindManyArgs = {
  where?: EquipamentoWhereInput;
  orderBy?: Array<EquipamentoOrderByInput>;
  skip?: number;
  take?: number;
};
