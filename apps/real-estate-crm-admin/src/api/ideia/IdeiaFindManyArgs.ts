import { IdeiaWhereInput } from "./IdeiaWhereInput";
import { IdeiaOrderByInput } from "./IdeiaOrderByInput";

export type IdeiaFindManyArgs = {
  where?: IdeiaWhereInput;
  orderBy?: Array<IdeiaOrderByInput>;
  skip?: number;
  take?: number;
};
