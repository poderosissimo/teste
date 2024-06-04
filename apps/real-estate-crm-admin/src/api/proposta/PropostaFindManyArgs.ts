import { PropostaWhereInput } from "./PropostaWhereInput";
import { PropostaOrderByInput } from "./PropostaOrderByInput";

export type PropostaFindManyArgs = {
  where?: PropostaWhereInput;
  orderBy?: Array<PropostaOrderByInput>;
  skip?: number;
  take?: number;
};
