import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  comissionPaidByOwnerField?: BooleanNullableFilter;
  id?: StringFilter;
  orderAppointmentDate?: DateTimeNullableFilter;
  orderClientId?: StringNullableFilter;
  orderComissionValue?: FloatNullableFilter;
  orderCreatedAt?: DateTimeNullableFilter;
  orderExtraCost?: FloatNullableFilter;
  orderHaveFidelity?: BooleanNullableFilter;
  orderNormalCost?: FloatNullableFilter;
  orderOwnerId?: StringNullableFilter;
  orderPaidByClientField?: BooleanNullableFilter;
  orderPaymentForm?: StringNullableFilter;
  orderPercentageAdopted?: FloatNullableFilter;
  orderPointsUsed?: FloatNullableFilter;
  orderProfessionalId?: StringNullableFilter;
  orderRequestId?: StringNullableFilter;
  orderTotalValue?: FloatNullableFilter;
};
