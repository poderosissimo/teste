import { RideUpdateManyWithoutDriversInput } from "./RideUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  rating?: number | null;
  rides?: RideUpdateManyWithoutDriversInput;
  vehicleType?: string | null;
};
