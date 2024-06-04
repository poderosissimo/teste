import { Module } from "@nestjs/common";
import { QualityModuleBase } from "./base/quality.module.base";
import { QualityService } from "./quality.service";
import { QualityController } from "./quality.controller";
import { QualityResolver } from "./quality.resolver";

@Module({
  imports: [QualityModuleBase],
  controllers: [QualityController],
  providers: [QualityService, QualityResolver],
  exports: [QualityService],
})
export class QualityModule {}
