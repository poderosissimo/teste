import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RideListRelationFilter } from "../ride/RideListRelationFilter";

export type DriverWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  rating?: FloatNullableFilter;
  rides?: RideListRelationFilter;
  vehicleType?: StringNullableFilter;
};
