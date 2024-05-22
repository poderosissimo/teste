import { Ride } from "../ride/Ride";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  paymentMethod: string | null;
  paymentStatus?: "Option1" | null;
  ride?: Ride | null;
  transactionId: string | null;
  updatedAt: Date;
};
