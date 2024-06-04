import { RideCreateNestedManyWithoutRidersInput } from "./RideCreateNestedManyWithoutRidersInput";

export type RiderCreateInput = {
  email?: string | null;
  name?: string | null;
  paymentMethod?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rides?: RideCreateNestedManyWithoutRidersInput;
};
