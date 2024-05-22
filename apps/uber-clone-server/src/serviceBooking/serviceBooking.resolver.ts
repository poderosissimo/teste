import * as graphql from "@nestjs/graphql";
import { ServiceBookingResolverBase } from "./base/serviceBooking.resolver.base";
import { ServiceBooking } from "./base/ServiceBooking";
import { ServiceBookingService } from "./serviceBooking.service";

@graphql.Resolver(() => ServiceBooking)
export class ServiceBookingResolver extends ServiceBookingResolverBase {
  constructor(protected readonly service: ServiceBookingService) {
    super(service);
  }
}
