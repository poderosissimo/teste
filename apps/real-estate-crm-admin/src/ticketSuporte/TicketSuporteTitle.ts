import { TicketSuporte as TTicketSuporte } from "../api/ticketSuporte/TicketSuporte";

export const TICKETSUPORTE_TITLE_FIELD = "id";

export const TicketSuporteTitle = (record: TTicketSuporte): string => {
  return record.id?.toString() || String(record.id);
};
