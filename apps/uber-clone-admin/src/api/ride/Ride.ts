import { Driver } from "../driver/Driver";
import { Payment } from "../payment/Payment";
import { Rider } from "../rider/Rider";

export type Ride = {
  createdAt: Date;
  driver?: Driver | null;
  dropoffLocation: string | null;
  endTime: Date | null;
  id: string;
  payments?: Array<Payment>;
  pickupLocation: string | null;
  requestTime: Date | null;
  rider?: Rider | null;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
