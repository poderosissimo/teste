import { SortOrder } from "../../util/SortOrder";

export type ClienteOrderByInput = {
  contatoPrincipal?: SortOrder;
  createdAt?: SortOrder;
  dataCriacao?: SortOrder;
  email?: SortOrder;
  endereco?: SortOrder;
  id?: SortOrder;
  nomeEmpresa?: SortOrder;
  observacoes?: SortOrder;
  setor?: SortOrder;
  tamanhoEmpresa?: SortOrder;
  telefone?: SortOrder;
  ultimaAtualizacao?: SortOrder;
  updatedAt?: SortOrder;
};
