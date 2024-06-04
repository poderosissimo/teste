import { Cliente as TCliente } from "../api/cliente/Cliente";

export const CLIENTE_TITLE_FIELD = "contatoPrincipal";

export const ClienteTitle = (record: TCliente): string => {
  return record.contatoPrincipal?.toString() || String(record.id);
};
