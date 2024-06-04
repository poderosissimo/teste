import { InovacaoWhereInput } from "./InovacaoWhereInput";
import { InovacaoOrderByInput } from "./InovacaoOrderByInput";

export type InovacaoFindManyArgs = {
  where?: InovacaoWhereInput;
  orderBy?: Array<InovacaoOrderByInput>;
  skip?: number;
  take?: number;
};
