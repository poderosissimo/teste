import { JsonValue } from "type-fest";

export type Location = {
  createdAt: Date;
  geoJson: JsonValue;
  id: string;
  latitude: number | null;
  longitude: number | null;
  updatedAt: Date;
};
