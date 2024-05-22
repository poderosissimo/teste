import { JsonValue } from "type-fest";
import { Review } from "../review/Review";
import { ServiceBooking } from "../serviceBooking/ServiceBooking";
import { SupportTicket } from "../supportTicket/SupportTicket";

export type Provider = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  profilePicture: JsonValue;
  rating: number | null;
  reviews?: Array<Review>;
  serviceBookings?: Array<ServiceBooking>;
  supportTickets?: Array<SupportTicket>;
  updatedAt: Date;
};
