import { Provider } from "../provider/Provider";
import { ServiceBooking } from "../serviceBooking/ServiceBooking";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  provider?: Provider | null;
  rating: number | null;
  serviceBooking?: ServiceBooking | null;
  updatedAt: Date;
  user?: User | null;
};
