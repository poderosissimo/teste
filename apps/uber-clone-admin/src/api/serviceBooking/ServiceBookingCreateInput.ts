import { ProviderWhereUniqueInput } from "../provider/ProviderWhereUniqueInput";
import { ReviewCreateNestedManyWithoutServiceBookingsInput } from "./ReviewCreateNestedManyWithoutServiceBookingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ServiceBookingCreateInput = {
  endTime?: Date | null;
  provider?: ProviderWhereUniqueInput | null;
  requestTime?: Date | null;
  reviews?: ReviewCreateNestedManyWithoutServiceBookingsInput;
  serviceType?: string | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
