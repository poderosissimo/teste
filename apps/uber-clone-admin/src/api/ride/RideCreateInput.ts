import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { PaymentCreateNestedManyWithoutRidesInput } from "./PaymentCreateNestedManyWithoutRidesInput";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideCreateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  endTime?: Date | null;
  payments?: PaymentCreateNestedManyWithoutRidesInput;
  pickupLocation?: string | null;
  requestTime?: Date | null;
  rider?: RiderWhereUniqueInput | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
