export type LeadCadastro = {
  contato: string | null;
  createdAt: Date;
  dataCriacao: Date | null;
  email: string | null;
  empresa: string | null;
  fonteDoLead: string | null;
  id: string;
  nome: string | null;
  responsavel: string | null;
  statusDoLead?: "Option1" | null;
  ultimaAtualizacao: Date | null;
  updatedAt: Date;
};
