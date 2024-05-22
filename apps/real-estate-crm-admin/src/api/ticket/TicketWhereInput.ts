import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TicketWhereInput = {
  assignedTo?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  priority?: "Option1";
  status?: "Option1";
  title?: StringNullableFilter;
};
