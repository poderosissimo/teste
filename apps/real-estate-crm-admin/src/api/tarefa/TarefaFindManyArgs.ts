import { TarefaWhereInput } from "./TarefaWhereInput";
import { TarefaOrderByInput } from "./TarefaOrderByInput";

export type TarefaFindManyArgs = {
  where?: TarefaWhereInput;
  orderBy?: Array<TarefaOrderByInput>;
  skip?: number;
  take?: number;
};
