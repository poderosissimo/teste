import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { Review } from "../review/Review";
import { ServiceBooking } from "../serviceBooking/ServiceBooking";
import { SupportTicket } from "../supportTicket/SupportTicket";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  notifications?: Array<Notification>;
  password: string | null;
  phoneNumber: string | null;
  profilePicture: JsonValue;
  reviews?: Array<Review>;
  roles?: Array<"Option1">;
  serviceBookings?: Array<ServiceBooking>;
  supportTickets?: Array<SupportTicket>;
  updatedAt: Date;
};
