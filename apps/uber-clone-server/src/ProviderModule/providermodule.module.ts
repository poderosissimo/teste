import { Module } from "@nestjs/common";
import { ProviderModuleService } from "./providermodule.service";
import { ProviderModuleController } from "./providermodule.controller";
import { ProviderModuleResolver } from "./providermodule.resolver";

@Module({
  controllers: [ProviderModuleController],
  providers: [ProviderModuleService, ProviderModuleResolver],
  exports: [ProviderModuleService],
})
export class ProviderModuleModule {}
