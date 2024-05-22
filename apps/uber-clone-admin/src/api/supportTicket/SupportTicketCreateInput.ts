import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketCreateInput = {
  description?: string | null;
  provider?: ProviderWhereUniqueInput | null;
  status?: "Option1" | null;
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
};
