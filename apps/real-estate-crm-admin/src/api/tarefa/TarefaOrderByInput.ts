import { SortOrder } from "../../util/SortOrder";

export type TarefaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
