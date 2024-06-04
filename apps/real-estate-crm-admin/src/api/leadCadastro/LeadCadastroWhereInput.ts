import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadCadastroWhereInput = {
  contato?: StringNullableFilter;
  dataCriacao?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  empresa?: StringNullableFilter;
  fonteDoLead?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  responsavel?: StringNullableFilter;
  statusDoLead?: "Option1";
  ultimaAtualizacao?: DateTimeNullableFilter;
};
