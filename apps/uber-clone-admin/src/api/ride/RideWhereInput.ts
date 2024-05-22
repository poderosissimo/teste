import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { RiderWhereUniqueInput } from "../rider/RiderWhereUniqueInput";

export type RideWhereInput = {
  driver?: DriverWhereUniqueInput;
  dropoffLocation?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  pickupLocation?: StringNullableFilter;
  requestTime?: DateTimeNullableFilter;
  rider?: RiderWhereUniqueInput;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
};
