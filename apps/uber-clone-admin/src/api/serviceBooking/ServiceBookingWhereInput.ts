import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceBookingWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
  requestTime?: DateTimeNullableFilter;
  reviews?: ReviewListRelationFilter;
  serviceType?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
