import { Usuario as TUsuario } from "../api/usuario/Usuario";

export const USUARIO_TITLE_FIELD = "id";

export const UsuarioTitle = (record: TUsuario): string => {
  return record.id?.toString() || String(record.id);
};
