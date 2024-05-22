import { Appointment } from "../appointment/Appointment";
import { JsonValue } from "type-fest";

export type Property = {
  appointments?: Array<Appointment>;
  contractInfo: string | null;
  createdAt: Date;
  id: string;
  signaturePdf: JsonValue;
  updatedAt: Date;
};
