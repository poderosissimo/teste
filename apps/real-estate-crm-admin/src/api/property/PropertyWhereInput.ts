import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PropertyWhereInput = {
  appointments?: AppointmentListRelationFilter;
  contractInfo?: StringNullableFilter;
  id?: StringFilter;
  signaturePdf?: JsonFilter;
};
