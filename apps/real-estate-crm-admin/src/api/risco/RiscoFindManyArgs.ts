import { RiscoWhereInput } from "./RiscoWhereInput";
import { RiscoOrderByInput } from "./RiscoOrderByInput";

export type RiscoFindManyArgs = {
  where?: RiscoWhereInput;
  orderBy?: Array<RiscoOrderByInput>;
  skip?: number;
  take?: number;
};
