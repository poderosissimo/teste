import { Module } from "@nestjs/common";
import { ManutencaoModuleBase } from "./base/manutencao.module.base";
import { ManutencaoService } from "./manutencao.service";
import { ManutencaoController } from "./manutencao.controller";
import { ManutencaoResolver } from "./manutencao.resolver";

@Module({
  imports: [ManutencaoModuleBase],
  controllers: [ManutencaoController],
  providers: [ManutencaoService, ManutencaoResolver],
  exports: [ManutencaoService],
})
export class ManutencaoModule {}
