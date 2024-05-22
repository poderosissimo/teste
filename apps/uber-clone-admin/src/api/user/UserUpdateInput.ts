import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { ServiceBookingUpdateManyWithoutUsersInput } from "./ServiceBookingUpdateManyWithoutUsersInput";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  name?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string | null;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: Array<"Option1">;
  serviceBookings?: ServiceBookingUpdateManyWithoutUsersInput;
  supportTickets?: SupportTicketUpdateManyWithoutUsersInput;
};
