import { QualityWhereInput } from "./QualityWhereInput";
import { QualityOrderByInput } from "./QualityOrderByInput";

export type QualityFindManyArgs = {
  where?: QualityWhereInput;
  orderBy?: Array<QualityOrderByInput>;
  skip?: number;
  take?: number;
};
