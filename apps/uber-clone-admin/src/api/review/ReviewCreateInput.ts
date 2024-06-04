import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { ServiceBookingWhereUniqueInput } from "../serviceBooking/ServiceBookingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  provider?: ProviderWhereUniqueInput | null;
  rating?: number | null;
  serviceBooking?: ServiceBookingWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
