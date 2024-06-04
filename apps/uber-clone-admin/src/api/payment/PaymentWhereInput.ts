import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RideWhereUniqueInput } from "../ride/RideWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentMethod?: StringNullableFilter;
  paymentStatus?: "Option1";
  ride?: RideWhereUniqueInput;
  transactionId?: StringNullableFilter;
};
