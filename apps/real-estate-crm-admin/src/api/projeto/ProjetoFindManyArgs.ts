import { ProjetoWhereInput } from "./ProjetoWhereInput";
import { ProjetoOrderByInput } from "./ProjetoOrderByInput";

export type ProjetoFindManyArgs = {
  where?: ProjetoWhereInput;
  orderBy?: Array<ProjetoOrderByInput>;
  skip?: number;
  take?: number;
};
