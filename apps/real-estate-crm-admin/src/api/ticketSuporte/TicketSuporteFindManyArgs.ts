import { TicketSuporteWhereInput } from "./TicketSuporteWhereInput";
import { TicketSuporteOrderByInput } from "./TicketSuporteOrderByInput";

export type TicketSuporteFindManyArgs = {
  where?: TicketSuporteWhereInput;
  orderBy?: Array<TicketSuporteOrderByInput>;
  skip?: number;
  take?: number;
};
