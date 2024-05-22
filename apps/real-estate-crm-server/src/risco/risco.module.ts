import { Module } from "@nestjs/common";
import { RiscoModuleBase } from "./base/risco.module.base";
import { RiscoService } from "./risco.service";
import { RiscoController } from "./risco.controller";
import { RiscoResolver } from "./risco.resolver";

@Module({
  imports: [RiscoModuleBase],
  controllers: [RiscoController],
  providers: [RiscoService, RiscoResolver],
  exports: [RiscoService],
})
export class RiscoModule {}
