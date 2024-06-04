import { InputJsonValue } from "../../types";

export type LocationUpdateInput = {
  geoJson?: InputJsonValue;
  latitude?: number | null;
  longitude?: number | null;
};
