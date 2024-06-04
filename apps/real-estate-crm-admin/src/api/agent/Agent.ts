import { Appointment } from "../appointment/Appointment";

export type Agent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  specialization?: "Option1" | null;
  updatedAt: Date;
};
