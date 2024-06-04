import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  specialization?: "Option1" | null;
};
