import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutProvidersInput } from "./ReviewUpdateManyWithoutProvidersInput";
import { ServiceBookingUpdateManyWithoutProvidersInput } from "./ServiceBookingUpdateManyWithoutProvidersInput";
import { SupportTicketUpdateManyWithoutProvidersInput } from "./SupportTicketUpdateManyWithoutProvidersInput";

export type ProviderUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  rating?: number | null;
  reviews?: ReviewUpdateManyWithoutProvidersInput;
  serviceBookings?: ServiceBookingUpdateManyWithoutProvidersInput;
  supportTickets?: SupportTicketUpdateManyWithoutProvidersInput;
};
