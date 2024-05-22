import { ServiceBooking as TServiceBooking } from "../api/serviceBooking/ServiceBooking";

export const SERVICEBOOKING_TITLE_FIELD = "serviceType";

export const ServiceBookingTitle = (record: TServiceBooking): string => {
  return record.serviceType?.toString() || String(record.id);
};
