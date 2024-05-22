import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  paymentMethod?: string | null;
  paymentStatus?: "Option1" | null;
  ride?: RideWhereUniqueInput | null;
  transactionId?: string | null;
};
