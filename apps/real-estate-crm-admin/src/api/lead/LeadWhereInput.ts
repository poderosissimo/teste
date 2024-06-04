import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LeadWhereInput = {
  dateCaptured?: DateTimeNullableFilter;
  id?: StringFilter;
  potentialValue?: FloatNullableFilter;
  source?: StringNullableFilter;
  status?: "Option1";
};
