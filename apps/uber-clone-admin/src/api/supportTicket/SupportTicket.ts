import { Provider } from "../provider/Provider";
import { User } from "../user/User";

export type SupportTicket = {
  createdAt: Date;
  description: string | null;
  id: string;
  provider?: Provider | null;
  status?: "Option1" | null;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
};
