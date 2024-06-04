import { Module } from "@nestjs/common";
import { IdeiaModuleBase } from "./base/ideia.module.base";
import { IdeiaService } from "./ideia.service";
import { IdeiaController } from "./ideia.controller";
import { IdeiaResolver } from "./ideia.resolver";

@Module({
  imports: [IdeiaModuleBase],
  controllers: [IdeiaController],
  providers: [IdeiaService, IdeiaResolver],
  exports: [IdeiaService],
})
export class IdeiaModule {}
