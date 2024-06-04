import { Ride } from "../ride/Ride";

export type Driver = {
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  rating: number | null;
  rides?: Array<Ride>;
  updatedAt: Date;
  vehicleType: string | null;
};
