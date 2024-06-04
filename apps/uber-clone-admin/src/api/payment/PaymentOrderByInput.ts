import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  paymentStatus?: SortOrder;
  rideId?: SortOrder;
  transactionId?: SortOrder;
  updatedAt?: SortOrder;
};
