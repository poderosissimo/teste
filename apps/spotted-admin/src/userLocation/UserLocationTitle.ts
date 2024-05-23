import { UserLocation as TUserLocation } from "../api/userLocation/UserLocation";

export const USERLOCATION_TITLE_FIELD = "userId";

export const UserLocationTitle = (record: TUserLocation): string => {
  return record.userId?.toString() || String(record.id);
};
