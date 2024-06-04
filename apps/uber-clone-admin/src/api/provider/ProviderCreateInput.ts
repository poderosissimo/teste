import { InputJsonValue } from "../../types";
import { ReviewCreateNestedManyWithoutProvidersInput } from "./ReviewCreateNestedManyWithoutProvidersInput";
import { ServiceBookingCreateNestedManyWithoutProvidersInput } from "./ServiceBookingCreateNestedManyWithoutProvidersInput";
import { SupportTicketCreateNestedManyWithoutProvidersInput } from "./SupportTicketCreateNestedManyWithoutProvidersInput";

export type ProviderCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  rating?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProvidersInput;
  serviceBookings?: ServiceBookingCreateNestedManyWithoutProvidersInput;
  supportTickets?: SupportTicketCreateNestedManyWithoutProvidersInput;
};
