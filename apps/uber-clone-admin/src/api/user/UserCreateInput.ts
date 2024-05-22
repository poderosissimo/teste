import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { ServiceBookingCreateNestedManyWithoutUsersInput } from "./ServiceBookingCreateNestedManyWithoutUsersInput";
import { SupportTicketCreateNestedManyWithoutUsersInput } from "./SupportTicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  name?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password?: string | null;
  phoneNumber?: string | null;
  profilePicture?: InputJsonValue;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles?: Array<"Option1">;
  serviceBookings?: ServiceBookingCreateNestedManyWithoutUsersInput;
  supportTickets?: SupportTicketCreateNestedManyWithoutUsersInput;
};
