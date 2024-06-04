import { InnovationWhereInput } from "./InnovationWhereInput";
import { InnovationOrderByInput } from "./InnovationOrderByInput";

export type InnovationFindManyArgs = {
  where?: InnovationWhereInput;
  orderBy?: Array<InnovationOrderByInput>;
  skip?: number;
  take?: number;
};
