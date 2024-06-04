import { Module } from "@nestjs/common";
import { ServiceModuleService } from "./servicemodule.service";
import { ServiceModuleController } from "./servicemodule.controller";
import { ServiceModuleResolver } from "./servicemodule.resolver";

@Module({
  controllers: [ServiceModuleController],
  providers: [ServiceModuleService, ServiceModuleResolver],
  exports: [ServiceModuleService],
})
export class ServiceModuleModule {}
