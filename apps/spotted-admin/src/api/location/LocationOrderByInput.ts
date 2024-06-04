import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  geoJson?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  updatedAt?: SortOrder;
};
