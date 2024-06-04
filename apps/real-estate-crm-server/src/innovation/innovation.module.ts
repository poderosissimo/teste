import { Module } from "@nestjs/common";
import { InnovationModuleBase } from "./base/innovation.module.base";
import { InnovationService } from "./innovation.service";
import { InnovationController } from "./innovation.controller";
import { InnovationResolver } from "./innovation.resolver";

@Module({
  imports: [InnovationModuleBase],
  controllers: [InnovationController],
  providers: [InnovationService, InnovationResolver],
  exports: [InnovationService],
})
export class InnovationModule {}
