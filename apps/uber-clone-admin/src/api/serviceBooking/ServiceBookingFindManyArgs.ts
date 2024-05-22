import { ServiceBookingWhereInput } from "./ServiceBookingWhereInput";
import { ServiceBookingOrderByInput } from "./ServiceBookingOrderByInput";

export type ServiceBookingFindManyArgs = {
  where?: ServiceBookingWhereInput;
  orderBy?: Array<ServiceBookingOrderByInput>;
  skip?: number;
  take?: number;
};
