import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { ServiceBookingListRelationFilter } from "../serviceBooking/ServiceBookingListRelationFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type ProviderWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  profilePicture?: JsonFilter;
  rating?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  serviceBookings?: ServiceBookingListRelationFilter;
  supportTickets?: SupportTicketListRelationFilter;
};
