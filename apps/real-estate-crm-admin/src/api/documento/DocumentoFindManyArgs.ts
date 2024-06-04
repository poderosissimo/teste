import { DocumentoWhereInput } from "./DocumentoWhereInput";
import { DocumentoOrderByInput } from "./DocumentoOrderByInput";

export type DocumentoFindManyArgs = {
  where?: DocumentoWhereInput;
  orderBy?: Array<DocumentoOrderByInput>;
  skip?: number;
  take?: number;
};
