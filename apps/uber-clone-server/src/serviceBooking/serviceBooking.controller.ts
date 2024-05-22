import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceBookingService } from "./serviceBooking.service";
import { ServiceBookingControllerBase } from "./base/serviceBooking.controller.base";

@swagger.ApiTags("serviceBookings")
@common.Controller("serviceBookings")
export class ServiceBookingController extends ServiceBookingControllerBase {
  constructor(protected readonly service: ServiceBookingService) {
    super(service);
  }
}
