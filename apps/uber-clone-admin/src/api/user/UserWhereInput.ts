import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { ServiceBookingListRelationFilter } from "../serviceBooking/ServiceBookingListRelationFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  password?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  profilePicture?: JsonFilter;
  reviews?: ReviewListRelationFilter;
  serviceBookings?: ServiceBookingListRelationFilter;
  supportTickets?: SupportTicketListRelationFilter;
};
