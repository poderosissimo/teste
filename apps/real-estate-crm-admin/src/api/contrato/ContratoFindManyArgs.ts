import { ContratoWhereInput } from "./ContratoWhereInput";
import { ContratoOrderByInput } from "./ContratoOrderByInput";

export type ContratoFindManyArgs = {
  where?: ContratoWhereInput;
  orderBy?: Array<ContratoOrderByInput>;
  skip?: number;
  take?: number;
};
