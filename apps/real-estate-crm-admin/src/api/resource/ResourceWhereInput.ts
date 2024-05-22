import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ResourceWhereInput = {
  assignedTo?: StringNullableFilter;
  availability?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  resourceType?: "Option1";
};
