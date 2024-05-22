import { FornecedorWhereInput } from "./FornecedorWhereInput";
import { FornecedorOrderByInput } from "./FornecedorOrderByInput";

export type FornecedorFindManyArgs = {
  where?: FornecedorWhereInput;
  orderBy?: Array<FornecedorOrderByInput>;
  skip?: number;
  take?: number;
};
