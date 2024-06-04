import { ContatoWhereInput } from "./ContatoWhereInput";
import { ContatoOrderByInput } from "./ContatoOrderByInput";

export type ContatoFindManyArgs = {
  where?: ContatoWhereInput;
  orderBy?: Array<ContatoOrderByInput>;
  skip?: number;
  take?: number;
};
