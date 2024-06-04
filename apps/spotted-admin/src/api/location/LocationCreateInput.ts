import { InputJsonValue } from "../../types";

export type LocationCreateInput = {
  geoJson?: InputJsonValue;
  latitude?: number | null;
  longitude?: number | null;
};
