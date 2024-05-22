import { RideUpdateManyWithoutRidersInput } from "./RideUpdateManyWithoutRidersInput";

export type RiderUpdateInput = {
  email?: string | null;
  name?: string | null;
  paymentMethod?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rides?: RideUpdateManyWithoutRidersInput;
};
