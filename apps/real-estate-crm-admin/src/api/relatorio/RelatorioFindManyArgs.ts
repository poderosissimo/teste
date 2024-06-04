import { RelatorioWhereInput } from "./RelatorioWhereInput";
import { RelatorioOrderByInput } from "./RelatorioOrderByInput";

export type RelatorioFindManyArgs = {
  where?: RelatorioWhereInput;
  orderBy?: Array<RelatorioOrderByInput>;
  skip?: number;
  take?: number;
};
