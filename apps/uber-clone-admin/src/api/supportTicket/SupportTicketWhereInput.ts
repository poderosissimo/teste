import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SupportTicketWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
  status?: "Option1";
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
