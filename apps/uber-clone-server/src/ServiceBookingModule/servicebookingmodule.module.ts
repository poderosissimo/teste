import { Module } from "@nestjs/common";
import { ServiceBookingModuleService } from "./servicebookingmodule.service";
import { ServiceBookingModuleController } from "./servicebookingmodule.controller";
import { ServiceBookingModuleResolver } from "./servicebookingmodule.resolver";

@Module({
  controllers: [ServiceBookingModuleController],
  providers: [ServiceBookingModuleService, ServiceBookingModuleResolver],
  exports: [ServiceBookingModuleService],
})
export class ServiceBookingModuleModule {}
