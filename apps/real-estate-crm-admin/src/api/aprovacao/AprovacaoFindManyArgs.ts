import { AprovacaoWhereInput } from "./AprovacaoWhereInput";
import { AprovacaoOrderByInput } from "./AprovacaoOrderByInput";

export type AprovacaoFindManyArgs = {
  where?: AprovacaoWhereInput;
  orderBy?: Array<AprovacaoOrderByInput>;
  skip?: number;
  take?: number;
};
