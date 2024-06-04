import { Module } from "@nestjs/common";
import { ServiceBookingModuleBase } from "./base/serviceBooking.module.base";
import { ServiceBookingService } from "./serviceBooking.service";
import { ServiceBookingController } from "./serviceBooking.controller";
import { ServiceBookingResolver } from "./serviceBooking.resolver";

@Module({
  imports: [ServiceBookingModuleBase],
  controllers: [ServiceBookingController],
  providers: [ServiceBookingService, ServiceBookingResolver],
  exports: [ServiceBookingService],
})
export class ServiceBookingModule {}
