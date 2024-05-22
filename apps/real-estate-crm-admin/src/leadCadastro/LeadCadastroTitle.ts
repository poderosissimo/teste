import { LeadCadastro as TLeadCadastro } from "../api/leadCadastro/LeadCadastro";

export const LEADCADASTRO_TITLE_FIELD = "contato";

export const LeadCadastroTitle = (record: TLeadCadastro): string => {
  return record.contato?.toString() || String(record.id);
};
