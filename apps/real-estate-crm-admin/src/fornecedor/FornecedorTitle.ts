import { Fornecedor as TFornecedor } from "../api/fornecedor/Fornecedor";

export const FORNECEDOR_TITLE_FIELD = "id";

export const FornecedorTitle = (record: TFornecedor): string => {
  return record.id?.toString() || String(record.id);
};
