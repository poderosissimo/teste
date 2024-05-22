import { Ride } from "../ride/Ride";

export type Rider = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  paymentMethod: string | null;
  phoneNumber: string | null;
  rating: number | null;
  rides?: Array<Ride>;
  updatedAt: Date;
};
