import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { ReviewUpdateManyWithoutServiceBookingsInput } from "./ReviewUpdateManyWithoutServiceBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceBookingUpdateInput = {
  endTime?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
  requestTime?: Date | null;
  reviews?: ReviewUpdateManyWithoutServiceBookingsInput;
  serviceType?: string | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
