import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ContractWhereInput = {
  approvalRequired?: BooleanNullableFilter;
  approvedBy?: StringNullableFilter;
  id?: StringFilter;
  renewalAlertDate?: DateTimeNullableFilter;
  validationStatus?: "Option1";
};
