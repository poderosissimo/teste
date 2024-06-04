import { Provider } from "../provider/Provider";
import { Review } from "../review/Review";
import { User } from "../user/User";

export type ServiceBooking = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  provider?: Provider | null;
  requestTime: Date | null;
  reviews?: Array<Review>;
  serviceType: string | null;
  startTime: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
