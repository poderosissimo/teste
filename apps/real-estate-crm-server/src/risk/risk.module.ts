import { Module } from "@nestjs/common";
import { RiskModuleBase } from "./base/risk.module.base";
import { RiskService } from "./risk.service";
import { RiskController } from "./risk.controller";
import { RiskResolver } from "./risk.resolver";

@Module({
  imports: [RiskModuleBase],
  controllers: [RiskController],
  providers: [RiskService, RiskResolver],
  exports: [RiskService],
})
export class RiskModule {}
