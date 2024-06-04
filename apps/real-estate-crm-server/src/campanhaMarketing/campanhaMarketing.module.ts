import { Module } from "@nestjs/common";
import { CampanhaMarketingModuleBase } from "./base/campanhaMarketing.module.base";
import { CampanhaMarketingService } from "./campanhaMarketing.service";
import { CampanhaMarketingController } from "./campanhaMarketing.controller";
import { CampanhaMarketingResolver } from "./campanhaMarketing.resolver";

@Module({
  imports: [CampanhaMarketingModuleBase],
  controllers: [CampanhaMarketingController],
  providers: [CampanhaMarketingService, CampanhaMarketingResolver],
  exports: [CampanhaMarketingService],
})
export class CampanhaMarketingModule {}
