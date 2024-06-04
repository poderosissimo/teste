import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type RiderWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentMethod?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rating?: FloatNullableFilter;
  rides?: RideListRelationFilter;
};
