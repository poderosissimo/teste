import { Module } from "@nestjs/common";
import { ReviewModuleService } from "./reviewmodule.service";
import { ReviewModuleController } from "./reviewmodule.controller";
import { ReviewModuleResolver } from "./reviewmodule.resolver";

@Module({
  controllers: [ReviewModuleController],
  providers: [ReviewModuleService, ReviewModuleResolver],
  exports: [ReviewModuleService],
})
export class ReviewModuleModule {}
