export type LeadCadastroCreateInput = {
  contato?: string | null;
  dataCriacao?: Date | null;
  email?: string | null;
  empresa?: string | null;
  fonteDoLead?: string | null;
  nome?: string | null;
  responsavel?: string | null;
  statusDoLead?: "Option1" | null;
  ultimaAtualizacao?: Date | null;
};
