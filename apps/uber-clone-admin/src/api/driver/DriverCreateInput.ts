import { RideCreateNestedManyWithoutDriversInput } from "./RideCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rides?: RideCreateNestedManyWithoutDriversInput;
  vehicleType?: string | null;
};
