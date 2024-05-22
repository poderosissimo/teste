import { ManutencaoWhereInput } from "./ManutencaoWhereInput";
import { ManutencaoOrderByInput } from "./ManutencaoOrderByInput";

export type ManutencaoFindManyArgs = {
  where?: ManutencaoWhereInput;
  orderBy?: Array<ManutencaoOrderByInput>;
  skip?: number;
  take?: number;
};
