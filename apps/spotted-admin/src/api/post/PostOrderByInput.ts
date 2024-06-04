import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  feedId?: SortOrder;
  id?: SortOrder;
  media?: SortOrder;
  updatedAt?: SortOrder;
};
