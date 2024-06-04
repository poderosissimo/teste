import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ServiceBookingWhereUniqueInput } from "../serviceBooking/ServiceBookingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  provider?: ProviderWhereUniqueInput;
  rating?: FloatNullableFilter;
  serviceBooking?: ServiceBookingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
