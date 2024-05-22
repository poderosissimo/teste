import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  contractInfo?: string | null;
  signaturePdf?: InputJsonValue;
};
