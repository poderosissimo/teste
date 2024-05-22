import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { PaymentUpdateManyWithoutRidesInput } from "./PaymentUpdateManyWithoutRidesInput";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideUpdateInput = {
  driver?: DriverWhereUniqueInput | null;
  dropoffLocation?: string | null;
  endTime?: Date | null;
  payments?: PaymentUpdateManyWithoutRidesInput;
  pickupLocation?: string | null;
  requestTime?: Date | null;
  rider?: RiderWhereUniqueInput | null;
  startTime?: Date | null;
  status?: "Option1" | null;
};
