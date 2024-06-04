import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClienteWhereInput = {
  contatoPrincipal?: StringNullableFilter;
  dataCriacao?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  endereco?: StringNullableFilter;
  id?: StringFilter;
  nomeEmpresa?: StringNullableFilter;
  observacoes?: StringNullableFilter;
  setor?: StringNullableFilter;
  tamanhoEmpresa?: StringNullableFilter;
  telefone?: StringNullableFilter;
  ultimaAtualizacao?: DateTimeNullableFilter;
};
