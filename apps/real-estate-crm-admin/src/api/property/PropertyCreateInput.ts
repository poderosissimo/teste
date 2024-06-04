import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  contractInfo?: string | null;
  signaturePdf?: InputJsonValue;
};
